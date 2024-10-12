let cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    let product = this.closest(".product");
    let productName = product.querySelector(".product-title").textContent;
    let productPrice = parseFloat(product.querySelector(".price").textContent);

    // Add product to cart
    cart.push({
      name: productName,
      price: productPrice,
    });
  });
});

// Show the cart modal
document.getElementById("view-cart").addEventListener("click", function () {
  if (cart.length === 0) {
    const items = JSON.parse(localStorage.getItem("myCart"));
    cart = items === null ? [] : items;
  }

  let cartModal = document.getElementById("cart-modal");
  let cartItemsDiv = document.getElementById("cart-items");
  let cartTotalP = document.getElementById("cart-total");

  // Clear previous content
  cartItemsDiv.innerHTML = "";
  let total = 0;

  // Display each item in the cart
  cart.forEach((item) => {
    let itemElement = document.createElement("p");
    itemElement.textContent = `${item.name} - ${item.price} грн`;
    cartItemsDiv.appendChild(itemElement);
    total += item.price;
  });

  // Update total price
  cartTotalP.textContent = `Загальна сума: ${total} грн`;

  // Show modal
  cartModal.style.display = "block";

  // Add items from cart to localstorage
  console.log(cart);
  localStorage.setItem("myCart", JSON.stringify(cart));
});

// Close the modal
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("cart-modal").style.display = "none";
});

// Order button
document.getElementById("order-btn").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Кошик порожній!");
  } else {
    window.location = "logistic.html";
    // Clear cart after order
    cart = [];
    localStorage.clear();
    document.getElementById("cart-modal").style.display = "none";
  }
});

// Remove item from cart
document.getElementById("delete-btn").addEventListener("click", function () {
  cart = [];
  localStorage.clear();
  document.location.reload();
});
