// ===== CART HELPERS =====
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // ===== PRODUCT PAGE LOGIC =====
  const buyButtons = document.querySelectorAll(".buy-button");
  
  if (buyButtons.length > 0) {
    let cart = getCart();
  
    buyButtons.forEach(button => {
      button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = parseFloat(button.dataset.price);
  
        cart.push({ product, price });
        saveCart(cart);
  
        alert(`${product} added to cart!`);
      });
    });
  }
  
  // ===== CHECKOUT PAGE LOGIC =====
  const cartItems = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  const payBtn = document.getElementById("payBtn");
  
  if (cartItems && totalEl && payBtn) {
    const cart = getCart();
    let total = 0;
  
    if (cart.length === 0) {
      cartItems.innerHTML = "<li>Your cart is empty</li>";
    } else {
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - £${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
      });
    }
  
    totalEl.textContent = total.toFixed(2);
  
    payBtn.addEventListener("click", () => {
      alert("Payment successful!");
      localStorage.removeItem("cart");
    });
  }
  