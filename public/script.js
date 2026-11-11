const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const overlay = document.getElementById("overlay");

const menuEl = document.getElementById("menu");

const categories = [...new Set(menu.map(item => item.category))];

function showMenu() {
    menuEl.innerHTML = "";

    categories.forEach(category => {
        const titleEl = document.createElement("h2");
        titleEl.className = "category-title";
        titleEl.textContent = category;
        menuEl.appendChild(titleEl);

        const items = menu.filter(item => item.category === category);

        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
                <button data-id="${item.id}">Add to cart</button>
            `;
            menuEl.appendChild(card);
        });
    });
}

showMenu();

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