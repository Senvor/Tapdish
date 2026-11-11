const express = require('express');
const fs = require("fs");
const path = require("path");
const menu = require("./public/menu.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_KEY = process.env.ADMIN_KEY || "sigmaboyskibidirizzler";
const DATA_DIR = path.join(__dirname, "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

app.use(express.json());
app.use(cors({ origin: "https://tapdish.senvor.dev" }));
app.use(express.static(path.join(__dirname, "public")));

function readOrders() {
    if (!fs.existsSync(ORDERS_FILE)) return [];
    return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf8"));
}

function writeOrders(orders) {
    fs.mkdirSync(DATA_DIR, { recursive: true});
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

app.post("/api/orders", (req, res) => {
    const { name, email, address, lines } = req.body || {};

    if (
        typeof name !== "string" || !name.trim() ||
        typeof email !== "string" || !email.includes("@") ||
        typeof address !== "string" || !address.trim() ||
        !Array.isArray(lines) || lines.length === 0
    ) {
        return res.status(400).json({ error: "Missing or invalid fields" });
    }

    const items = [];
    let total = 0;

    for (const line of lines) {
        const dish = menu.find(m => m.id === line.id);
        const qty = Number(line.qty);

        if (!dish || !Number.isInteger(qty) || qty < 1 || qty > 50) {
            return res.status(400).json({ error: "Invalid item in order" });
        }

        items.push({ name: dish.name, qty: qty, price: dish.price });
        total += dish.price * qty;
    }

    const orders = readOrders();

    const order = {
        number: orders.length + 1,
        name: name.trim().slice(0, 100),
        email: email.trim().slice(0, 150),
        address: address.trim().slice(0, 500),
        items: items,
        total: Math.round(total * 100) / 100,
        createdAt: new Date().toISOString()
    };

    orders.push(order);
    writeOrders(orders);

    res.status(201).json({ number: order.number, name: order.name, total: order.total });
});

app.get("/api/orders", (req, res) => {
  if (req.get("x-admin-key") !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json(readOrders());
});

app.listen(PORT, () => {
  console.log(`Tapdish running at http://localhost:${PORT}`);
});