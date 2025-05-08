document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
  
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
  });