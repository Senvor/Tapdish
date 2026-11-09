const menu = [

    // Starters
    {id: 1, category: "Starters", name: "Samosa", desc: "Crispy pastry filled with spiced potatoes and peas", price: 4.99},
    {id: 2, category: "Starters", name: "Onion Bhaji", desc: "Crunchy gram flour fritters with sliced onion", price: 5.99},
    {id: 3, category: "Starters", name: "Paneer Tikka", desc: "Marinated paneer cubes grilled to perfection", price: 6.99},
    {id: 4, category: "Starters", name: "Spring Rolls", desc: "Crispy rolls filled with vegetables", price: 7.99},
    {id: 5, category: "Starters", name: "Momos", desc: "Steamed dumplings filled with vegetables or meat", price: 8.99},
    {id: 6, category: "Starters", name: "Masala Fries", desc: "Crisp fries with spice mix", price: 9.49},
    {id: 7, category: "Starters", name: "Chicken Wings", desc: "Spicy chicken wings served with dipping sauce", price: 9.99},
    {id: 8, category: "Starters", name: "Tomato Soup", desc: "Slow-simmered tomato soup with basil", price: 5.49},
    {id: 9, category: "Starters", name: "Caesar Salad", desc: "Romaine, parmesan, croutons, Caesar dressing", price: 9.89},
    {id: 10, category: "Starters", name: "Garlic Bread", desc: "Toasted bread with garlic butter", price: 10.49},
    {id: 11, category: "Starters", name: "Bruschetta", desc: "Grilled bread with tomato and basil", price: 11.99},
    {id: 12, category: "Starters", name: "Stuffed Mushrooms", desc: "Mushrooms filled with cheese and herbs", price: 12.99},
    {id: 13, category: "Starters", name: "Cheese Nachos", desc: "Tortilla chips topped with melted cheese and jalapenos", price: 13.99},
    {id: 14, category: "Starters", name: "Chicken Quesadilla", desc: "Grilled chicken with melted cheese and peppers", price: 14.99},
    {id: 15, category: "Starters", name: "Beef Sliders", desc: "Mini beef burgers with lettuce and tomato", price: 15.99},

    // Burgers & Wraps
    {id: 16, category: "Burgers & Wraps", name: "Classic Burger", desc: "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles", price: 8.99 },
    {id: 17, category: "Burgers & Wraps", name: "Veggie Delight", desc: "Grilled vegetables, lettuce, tomato, and hummus", price: 7.99 },
    {id: 18, category: "Burgers & Wraps", name: "BBQ Chicken Burger", desc: "Grilled chicken breast with BBQ sauce, lettuce, and tomato", price: 9.49 },
    {id: 19, category: "Burgers & Wraps", name: "Mushroom Swiss Burger", desc: "Beef patty with sautéed mushrooms and Swiss cheese, lettuce, tomato, and onion", price: 10.99 },
    {id: 20, category: "Burgers & Wraps", name: "Indian Burger", desc: "Spicy beef patty with Indian spices and naan bread", price: 11.49 },
    {id: 21, category: "Burgers & Wraps", name: "Classic Club Sandwich", desc: "Grilled chicken, bacon, lettuce, tomato, and mayo on toasted bread", price: 12.99 },
    {id: 22, category: "Burgers & Wraps", name: "Chicken Tikka Sandwich", desc: "Tender chicken tikka with lettuce, onion, and mint sauce", price: 11.49 },
    {id: 23, category: "Burgers & Wraps", name: "Grilled Cheese Sandwich", desc: "Toasted sourdough filled with melted cheddar and mozzarella", price: 9.99 },
    {id: 24, category: "Burgers & Wraps", name: "Veggie Panini", desc: "Roasted vegetables, pesto, and mozzarella pressed in ciabatta", price: 10.49 },
    {id: 25, category: "Burgers & Wraps", name: "Chicken Caesar Sandwich", desc: "Grilled chicken, romaine, parmesan, and Caesar dressing in a toasted bun", price: 12.49 },
    {id: 26, category: "Burgers & Wraps", name: "Classic Chicken Wrap", desc: "Grilled chicken, lettuce, tomato, cheese, and sauce wrapped in flatbread", price: 12.49 },
    {id: 27, category: "Burgers & Wraps", name: "Veggie Crunch Wrap", desc: "Fresh vegetables, hummus, and crispy greens in a soft tortilla", price: 10.99 },
    {id: 28, category: "Burgers & Wraps", name: "Paneer Tikka Wrap", desc: "Marinated paneer tikka with peppers, onion, and mint yogurt sauce", price: 11.99 },
    {id: 29, category: "Burgers & Wraps", name: "BBQ Chicken Wrap", desc: "BBQ chicken, cheddar, lettuce, and onion in a warm wrap", price: 12.99 },
    {id: 30, category: "Burgers & Wraps", name: "Falafel Wrap", desc: "Crispy falafel, salad, pickles, and tahini dressing in a wrap", price: 11.49 },

    // Pizza & Pasta
    {id: 31, category: "Pizza & Pasta", name: "Margherita Pizza", desc: "Classic pizza with tomato sauce, mozzarella, and fresh basil", price: 9.99 },
    {id: 32, category: "Pizza & Pasta", name: "Pepperoni Pizza", desc: "Tomato sauce, mozzarella, and pepperoni slices", price: 11.99 },
    {id: 33, category: "Pizza & Pasta", name: "Veggie Supreme Pizza", desc: "Tomato sauce, mozzarella, bell peppers, onions, mushrooms, and olives", price: 12.99 },
    {id: 34, category: "Pizza & Pasta", name: "BBQ Chicken Pizza", desc: "BBQ sauce, mozzarella, grilled chicken, red onions, and cilantro", price: 13.99 },
    {id: 35, category: "Pizza & Pasta", name: "Farmhouse Pizza", desc: "Tomato sauce, mozzarella, bell peppers, onions, mushrooms, and corn", price: 12.49 },
    {id: 36, category: "Pizza & Pasta", name: "Pasta Alfredo", desc: "Fettuccine pasta in a creamy Alfredo sauce with parmesan cheese", price: 10.99 },
    {id: 37, category: "Pizza & Pasta", name: "Pasta Bolognese", desc: "Spaghetti pasta with rich meat sauce and parmesan cheese", price: 11.99 },
    {id: 38, category: "Pizza & Pasta", name: "Pasta Pesto", desc: "Penne pasta tossed in a fresh basil pesto sauce with cherry tomatoes", price: 10.49 },
    { id: 39, category: "Pizza & Pasta", name: "Penne Arrabbiata", desc: "Penne in a spicy tomato and garlic sauce", price: 12.99 },
    {id: 40, category: "Pizza & Pasta", name: "Lasagna", desc: "Layers of pasta, meat sauce, and cheese baked to perfection", price: 13.49 },
    {id: 41, category: "Pizza & Pasta", name: "Indian Pizza", desc: "Spiced paneer, bell peppers, onions, and mozzarella with tikka sauce", price: 13.99},
    {id: 42, category: "Pizza & Pasta", name: "Paneer Tikka Pizza", desc: "Tandoori paneer, red onion, peppers, and mint yogurt drizzle", price: 14.49},
    {id: 43, category: "Pizza & Pasta", name: "Chicken Tikka Masala Pizza", desc: "Chicken tikka, creamy masala sauce, mozzarella, and cilantro", price: 14.99},
    {id: 44, category: "Pizza & Pasta", name: "Masala Macaroni", desc: "Macaroni tossed with Indian spices, tomatoes, peppers, and herbs", price: 11.49},
    {id: 45, category: "Pizza & Pasta", name: "Chicken Curry Pasta", desc: "Penne with tender chicken in a gently spiced curry cream sauce", price: 13.49},

    // Indian Mains
    {id: 46, category: "Indian Mains", name: "Butter Chicken", desc: "Tender chicken in a creamy tomato-based sauce with butter and spices", price: 14.99},
    {id: 47, category: "Indian Mains", name: "Paneer Butter Masala", desc: "Cottage cheese cubes in a rich and creamy tomato gravy with butter and spices", price: 13.99},
    {id: 48, category: "Indian Mains", name: "Chana Masala", desc: "Chickpeas cooked in a spicy and tangy tomato-based sauce with onions and spices", price: 12.99},
    {id: 49, category: "Indian Mains", name: "Lamb Rogan Josh", desc: "Tender lamb cooked in a rich and aromatic curry sauce with spices and yogurt", price: 15.99},
    {id: 50, category: "Indian Mains", name: "Aloo Gobi", desc: "Potatoes and cauliflower cooked with spices, tomatoes, and onions", price: 11.99},
    {id: 51, category: "Indian Mains", name: "Palak Paneer", desc: "Cottage cheese cubes cooked in a creamy spinach sauce with spices", price: 13.49},
    {id: 52, category: "Indian Mains", name: "Chicken Tikka Masala", desc: "Grilled chicken pieces in a creamy tomato-based sauce with spices", price: 14.49},
    {id: 53, category: "Indian Mains", name: "Vegetable Biryani", desc: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices", price: 12.49},
    {id: 54, category: "Indian Mains", name: "Lamb Biryani", desc: "Fragrant basmati rice cooked with tender lamb and aromatic spices", price: 15.49},
    {id: 55, category: "Indian Mains", name: "Chicken Biryani", desc: "Fragrant basmati rice cooked with tender chicken and aromatic spices", price: 14.99},
    {id: 56, category: "Indian Mains", name: "Dal Makhani", desc: "Slow-cooked black lentils in a creamy tomato-based sauce with butter and spices", price: 12.99},
    {id: 57, category: "Indian Mains", name: "Fish Curry", desc: "Fresh fish cooked in a tangy and spicy curry sauce with coconut milk and spices", price: 15.99},
    {id: 58, category: "Indian Mains", name: "Prawn Masala", desc: "Succulent prawns cooked in a rich and flavorful tomato-based sauce with spices", price: 16.49},
    {id: 59, category: "Indian Mains", name: "Vegetable Korma", desc: "Mixed vegetables cooked in a creamy coconut-based sauce with spices", price: 13.49},
    {id: 60, category: "Indian Mains", name: "Chicken Korma", desc: "Tender chicken pieces cooked in a creamy coconut-based sauce with spices", price: 14.99},

    // Breads & Sides
    {id: 61, category: "Breads & Sides", name: "Naan", desc: "Soft and fluffy Indian flatbread baked in a tandoor", price: 2.99},
    {id: 62, category: "Breads & Sides", name: "Garlic Naan", desc: "Soft and fluffy Indian flatbread topped with garlic and baked in a tandoor", price: 3.49},
    {id: 63, category: "Breads & Sides", name: "Butter Naan", desc: "Soft and fluffy Indian flatbread brushed with butter and baked in a tandoor", price: 3.49},
    {id: 64, category: "Breads & Sides", name: "Tandoori Roti", desc: "Whole wheat flatbread baked in a tandoor", price: 2.49},
    {id: 65, category: "Breads & Sides", name: "Cheese Naan", desc: "Soft naan stuffed with melted cheese and baked in a tandoor", price: 4.49},
    {id: 66, category: "Breads & Sides", name: "Aloo Paratha", desc: "Whole wheat flatbread stuffed with spiced mashed potatoes and baked on a griddle", price: 4.99},
    {id: 67, category: "Breads & Sides", name: "Paneer Paratha", desc: "Whole wheat flatbread stuffed with spiced paneer and baked on a griddle", price: 5.49},
    {id: 68, category: "Breads & Sides", name: "Onion Kulcha", desc: "Soft and fluffy Indian flatbread stuffed with spiced onions and baked in a tandoor", price: 4.99},
    {id: 69, category: "Breads & Sides", name: "Pav Bhaji", desc: "Spiced vegetable mash served with buttered bread rolls", price: 6.99},
    {id: 70, category: "Breads & Sides", name: "Masala Papad", desc: "Crispy lentil wafers topped with spiced onions, tomatoes, and coriander", price: 3.99},
    {id: 71, category: "Breads & Sides", name: "Raita", desc: "Cooling yogurt dip with cucumber, mint, and spices", price: 2.99},
    {id: 72, category: "Breads & Sides", name: "Pickle Platter", desc: "Assorted Indian pickles to complement your meal", price: 4.49},
    {id: 73, category: "Breads & Sides", name: "Papadum", desc: "Crispy lentil wafers served with chutneys", price: 2.49},
    {id: 74, category: "Breads & Sides", name: "Jeera Rice", desc: "Basmati rice flavored with cumin seeds", price: 3.99},
    {id: 75, category: "Breads & Sides", name: "Steamed Basmati Rice", desc: "Fluffy basmati rice steamed to perfection", price: 3.49},

    // Desserts & Drinks
    {id: 76, category: "Desserts & Drinks", name: "Gulab Jamun", desc: "Soft and spongy milk-based dumplings soaked in sugar syrup", price: 4.99},
    {id: 77, category: "Desserts & Drinks", name: "Rasmalai", desc: "Soft cheese dumplings in sweetened milk flavored with cardamom and saffron", price: 5.49},
    {id: 78, category: "Desserts & Drinks", name: "Kheer", desc: "Creamy rice pudding flavored with cardamom and garnished with nuts", price: 4.99},
    {id: 79, category: "Desserts & Drinks", name: "Mango Lassi", desc: "Refreshing yogurt-based mango drink blended with spices", price: 3.99},
    {id: 80, category: "Desserts & Drinks", name: "Masala Chai", desc: "Traditional Indian spiced tea brewed with milk and aromatic spices", price: 2.99},
    {id: 81, category: "Desserts & Drinks", name: "Falooda", desc: "Sweet and refreshing dessert drink with vermicelli, basil seeds, rose syrup, and ice cream", price: 5.99},
    {id: 82, category: "Desserts & Drinks", name: "Jalebi", desc: "Crispy and syrupy deep-fried spirals made from fermented batter", price: 4.49},
    {id: 83, category: "Desserts & Drinks", name: "Kulfi", desc: "Traditional Indian ice cream made with condensed milk and flavored with cardamom and saffron", price: 5.49},
    {id: 84, category: "Desserts & Drinks", name: "Choco Lava Cake", desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream", price: 6.99},
    {id: 85, category: "Desserts & Drinks", name: "Coffee", desc: "Freshly brewed coffee served hot or iced", price: 2.99},
    {id: 86, category: "Desserts & Drinks", name: "Soft Drinks", desc: "Assorted carbonated beverages served chilled", price: 1.99},
    {id: 87, category: "Desserts & Drinks", name: "Lemonade", desc: "Refreshing lemon drink made with fresh lemons and sugar", price: 2.49},
    {id: 88, category: "Desserts & Drinks", name: "Iced Tea", desc: "Chilled tea served with lemon and mint", price: 2.99},
    {id: 89, category: "Desserts & Drinks", name: "Mojito Mocktail", desc: "Refreshing mint and lime mocktail with soda", price: 4.99},
    {id: 90, category: "Desserts & Drinks", name: "Strawberry Smoothie", desc: "Blended fresh strawberries with yogurt and honey", price: 5.49}

];

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

let cart = [];

const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const overlay = document.getElementById("overlay");

function updateCartButton() {
    const totalItems = cart.reduce((sum, line) => sum + line.qty, 0);
    cartButton.textContent = `Cart (${totalItems})`;
}

function addToCart(itemId) {
    const existing = cart.find(line => line.id === itemId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: itemId, qty: 1 });
    }

    updateCartButton();
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

checkoutForm.addEventListener("submit", e => {
    e.preventDefault();

    const order = {
        number: Math.floor(1000 + Math.random() * 9000),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        address: document.getElementById("address").value.trim(),
        lines: cart.map(line => {
            const item = menu.find(m => m.id === line.id);
            return { name: item.name, qty: line.qty, price: item.price };
        }),
        total: cartTotal()
    };

    console.log(order);

    document.getElementById("confirm-name").textContent = order.name;
    document.getElementById("confirm-number").textContent = "#" + order.number;
    checkoutEl.classList.add("done");

    cart = [];
    updateCartButton();
    showCart();
    checkoutForm.reset();
});

document.getElementById("close-confirmation").addEventListener("click", () => {
    checkoutEl.classList.remove("open");
});