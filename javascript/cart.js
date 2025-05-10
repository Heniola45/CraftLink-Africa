document.addEventListener("DOMContentLoaded", function () {
  const cart = [];

  // Add to Cart button logic
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");
      const productCard = button.closest(".artisan-card");
      const name = productCard.querySelector(".artisan-name").innerText;

      const item = {
        id: productId,
        name: name,
      };

      cart.push(item);
      alert(`${name} added to cart!`);
      console.log("Current cart:", cart);
    });
  });

  // Cart quantity and subtotal logic
  function updateSubtotal() {
    let subtotal = 0;
    let totalItems = 0;
    const items = document.querySelectorAll(".cart-item");

    items.forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const priceNumber = parseInt(item.querySelector(".item-price").getAttribute("data-price"));
      subtotal += quantity * priceNumber;
      totalItems += quantity;
    });

    const summary = document.querySelector(".summary-section strong");
    if (summary) {
      summary.innerHTML = `₦ ${subtotal.toLocaleString()}`;
    }

    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
      cartCount.textContent = totalItems;
    }
  }

  function bindCartEvents() {
    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach((item) => {
      const decreaseBtn = item.querySelector(".decrease");
      const increaseBtn = item.querySelector(".increase");
      const quantityEl = item.querySelector(".quantity");
      const removeBtn = item.querySelector(".remove");

      decreaseBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityEl.textContent);
        if (quantity > 1) {
          quantityEl.textContent = quantity - 1;
          updateSubtotal();
        }
      });

      increaseBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityEl.textContent);
        quantityEl.textContent = quantity + 1;
        updateSubtotal();
      });

      removeBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to remove this item from your cart?")) {
          item.remove();
          updateSubtotal();
        }
      });
    });
  }

  // Currency selector
  const currencySelector = document.getElementById("currencySelector");
  if (currencySelector) {
    currencySelector.addEventListener("change", (e) => {
      const currency = e.target.value;
      const prices = document.querySelectorAll(".cart-item");
      let multiplier = 1;
      let symbol = "₦";

      switch (currency) {
        case "USD":
          multiplier = 1 / 1300;
          symbol = "$";
          break;
        case "EUR":
          multiplier = 1 / 1400;
          symbol = "€";
          break;
        default:
          multiplier = 1;
          symbol = "₦";
      }

      let subtotal = 0;

      prices.forEach((item) => {
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const basePrice = parseInt(item.querySelector(".item-price").getAttribute("data-price"));
        const converted = Math.round(basePrice * multiplier);
        item.querySelector(".item-price").textContent = `${symbol} ${(converted).toLocaleString()}`;
        subtotal += quantity * converted;
      });

      const summary = document.querySelector(".summary-section strong");
      if (summary) {
        summary.textContent = `${symbol} ${subtotal.toLocaleString()}`;
      }
    });
  }

  bindCartEvents();
  updateSubtotal();
});
