let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
    });
    document.querySelector('.cart-summary p').textContent = `Total: $${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Call updateCart to show items if there are any
updateCart();
