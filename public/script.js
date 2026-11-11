const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const overlay = document.getElementById("overlay");

const menuEl = document.getElementById("menu");

const categories = [...new Set(menu.map(item => item.category))];

function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function showMenu() {
    menuEl.innerHTML = "";

    categories.forEach(category => {
        const titleEl = document.createElement("h2");
        titleEl.className = "category-title";
        titleEl.id = slug(category);
        titleEl.textContent = category;
        menuEl.appendChild(titleEl);

        const items = menu.filter(item => item.category === category);

        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="card-top">
                    <img class="dish-img" src="img/${item.id}.png" alt="" width="72" height="72" loading="lazy">
                    <h3>${item.name}</h3>
                </div>
                <p>${item.desc}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
                <button data-id="${item.id}">Add to cart</button>
            `;
            menuEl.appendChild(card);
        });
    });
}

showMenu();

const categoryNav = document.getElementById("category-nav");

categories.forEach(category => {
    const link = document.createElement("a");
    link.href = "#" + slug(category);
    link.textContent = category;
    categoryNav.appendChild(link);
});

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("tapdish-cart"));
        if (!Array.isArray(saved)) return [];
        return saved.filter(line => menu.some(m => m.id === line.id) && line.qty > 0);
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem("tapdish-cart", JSON.stringify(cart));
}

let cart = loadCart();

function updateCartButton() {
    const count = cart.reduce((sum, line) => sum + line.qty, 0);
    cartButton.textContent = `Cart (${count})`;
}

function bumpCart() {
    cartButton.classList.remove("bump");
    void cartButton.offsetWidth;
    cartButton.classList.add("bump");
}

function addToCart(itemId) {
    const existing = cart.find(line => line.id === itemId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: itemId, qty: 1 });
    }

    updateCartButton();
    saveCart();
    showCart();
    bumpCart();
}

function showCart() {
    cartItemsEl.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(line => {
            const item = menu.find(i => i.id === line.id);
            if (!item) return;

            total += item.price * line.qty;

            const row = document.createElement("div");
            row.className = "cart-row";
            row.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <span>$${(item.price * line.qty).toFixed(2)}</span>
                </div>
                <div class="qty">
                    <button data-action="minus" data-id="${item.id}">-</button>
                    <span>${line.qty}</span>
                    <button data-action="plus" data-id="${item.id}">+</button>
                </div>
            `;
            cartItemsEl.appendChild(row);
        });
    }

    cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

function changeQty(id, change) {
    const line = cart.find(l => l.id === id);
    if (!line) return;

    line.qty += change;

    if (line.qty <= 0) {
        cart = cart.filter(l => l.id !== id);
    }

    updateCartButton();
    saveCart();
    showCart();
}

function openCart() {
    showCart();
    cartPanel.classList.add("open");
    overlay.classList.add("open");
}

function closeCart() {
    cartPanel.classList.remove("open");
    overlay.classList.remove("open");
}

menuEl.addEventListener("click", e => {
    const id = e.target.dataset.id;
    if (!id) return;
    addToCart(Number(id));

    const button = e.target;
    button.textContent = "Added";
    button.classList.add("added");

    setTimeout(() => {
        button.textContent = "Add to cart";
        button.classList.remove("added");
    }, 700);
});

cartItemsEl.addEventListener("click", e => {
    const id = e.target.dataset.id;
    const action = e.target.dataset.action;
    if (!id) return;

    changeQty(Number(id), action === "plus" ? 1 : -1);
});

cartButton.addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCart();
});

const checkoutEl = document.getElementById("checkout");
const checkoutForm = document.getElementById("checkout-form");

function cartTotal() {
    return cart.reduce((sum, line) => {
        const item = menu.find(m => m.id === line.id);
        return sum + item.price * line.qty;
    }, 0);
}

document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length === 0) return;

    document.getElementById("checkout-total").textContent = "$" + cartTotal().toFixed(2);
    closeCart();
    checkoutEl.classList.remove("done");
    checkoutEl.classList.add("open");
});

document.getElementById("cancel-checkout").addEventListener("click", () => {
    checkoutEl.classList.remove("open");
    openCart();
});

const API_URL = location.hostname === "tapdish.senvor.dev"
    ? "https://tapdish-5drb.onrender.com"
    : "";

checkoutForm.addEventListener("submit", async e => {
    e.preventDefault();

    const submitButton = checkoutForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    try {
        const res = await fetch(`${API_URL}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                lines: cart.map(line => ({ id: line.id, qty: line.qty }))
            })
        });

        if (!res.ok) throw new Error("Order failed");

        const order = await res.json();

        document.getElementById("confirm-name").textContent = order.name;
        document.getElementById("confirm-number").textContent = "#" + order.number;
        checkoutEl.classList.add("done");

        cart = [];
        saveCart();
        updateCartButton();
        showCart();
        checkoutForm.reset();
    } catch (err) {
        alert("Couldn't place your order. Please try again.");
    } finally {
        submitButton.disabled = false;
    }
});

document.getElementById("close-confirmation").addEventListener("click", () => {
    checkoutEl.classList.remove("open");
});

updateCartButton();

const ordersView = document.getElementById("orders-view");
const ordersKeyForm = document.getElementById("orders-key-form");
const ordersList = document.getElementById("orders-list");
const adminKeyInput = document.getElementById("admin-key");

function showOrders(orders) {
    ordersList.textContent = "";

    if (orders.length === 0) {
        ordersList.textContent = "No orders yet.";
        return;
    }

    orders.slice().reverse().forEach(order => {
        const card = document.createElement("div");
        card.className = "order-card";

        const title = document.createElement("h3");
        title.textContent = `#${order.number} - $${order.total.toFixed(2)}`;

        const who = document.createElement("p");
        who.textContent = `${order.name} | ${order.email}`;

        const where = document.createElement("p");
        where.textContent = order.address;

        const items = document.createElement("p");
        items.textContent = order.items.map(i => `${i.qty} x ${i.name}`).join(", ");

        const time = document.createElement("small");
        time.textContent = new Date(order.createdAt).toLocaleString();

        card.append(title, who, where, items, time);
        ordersList.appendChild(card);
    });
}

document.getElementById("orders-button").addEventListener("click", () => {
    ordersList.textContent = "";
    ordersKeyForm.style.display = "block";
    ordersView.classList.add("open");
});

document.getElementById("close-orders").addEventListener("click", () => {
    ordersView.classList.remove("open");
    adminKeyInput.value = "";
    ordersList.textContent = "";
});

ordersKeyForm.addEventListener("submit", async e => {
    e.preventDefault();
    ordersList.textContent = "Loading...";

    try {
        const res = await fetch(`${API_URL}/api/orders`, {
            headers: { "x-admin-key": adminKeyInput.value }
        });

        if (res.status === 401) {
            ordersList.textContent = "Wrong key.";
            return;
        }
        if (!res.ok) throw new Error("Request failed");

        showOrders(await res.json());
        ordersKeyForm.style.display = "none";
        adminKeyInput.value = "";
    } catch (err) {
        ordersList.textContent = "Couldn't load orders.";
    }
});