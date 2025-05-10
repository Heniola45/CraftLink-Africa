const discountedProducts = [
    {
      name: "Handmade Handbag",
      category: "bags",
      image: "./assets/Bags.png",
      oldPrice: 40,
      newPrice: 20
    },
    {
      name: "Handmade Hat",
      category: "hats",
      image: "./assets/Hats.png",
      oldPrice: 35,
      newPrice: 17.5
    },
    {
      name: "Handmade Footwear",
      category: "footwears",
      image: "./assets/Footwear.png",
      oldPrice: 50,
      newPrice: 25
    },
    {
      name: "Male Shirt",
      category: "clothings",
      image: "./assets/Clothing.png",
      oldPrice: 45,
      newPrice: 22.5
    },
    {
        name: "Male Shirt",
        category: "clothings",
        image: "./assets/Clothing.png",
        oldPrice: 45,
        newPrice: 22.5
    },
    {
        name: "Handmade Footwear",
        category: "footwears",
        image: "./assets/Footwear.png",
        oldPrice: 50,
        newPrice: 25
    },
    {
        name: "Handmade Hat",
        category: "hats",
        image: "./assets/Hats.png",
        oldPrice: 35,
        newPrice: 17.5
    },
    {
        name: "Handmade Handbag",
        category: "bags",
        image: "./assets/Bags.png",
        oldPrice: 40,
        newPrice: 20
    },

  ];
  
  const discountedServices = [
    {
      name: "Custom Bead Workshop",
      description: "Learn to create your own unique bead jewelry with expert guidance.",
      oldPrice: 100,
      newPrice: 50
    },
    {
      name: "Gift Wrapping",
      description: "Premium artisan gift wrapping for special occasions.",
      oldPrice: 20,
      newPrice: 10
    },
    {
        name: "Automobile Service",
        description: "Learn to create your own unique bead jewelry with expert guidance.",
        oldPrice: 100,
        newPrice: 50
    },
    {
        name: "Hair Dressing",
        description: "Premium artisan gift wrapping for special occasions.",
        oldPrice: 20,
        newPrice: 10
    },
    {
        name: "Fashion Designer",
        description: "Learn to create your own unique bead jewelry with expert guidance.",
        oldPrice: 100,
        newPrice: 50
      },
      {
        name: "Plumber",
        description: "Premium artisan gift wrapping for special occasions.",
        oldPrice: 20,
        newPrice: 10
      },
      {
          name: "UI/UX Designer",
          description: "Learn to create your own unique bead jewelry with expert guidance.",
          oldPrice: 100,
          newPrice: 50
        },
        {
          name: "Gift Wrapping",
          description: "Premium artisan gift wrapping for special occasions.",
          oldPrice: 20,
          newPrice: 10
        }
  ];
  
  function renderProducts(filter = "all") {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
  
    const filtered = filter === "all"
      ? discountedProducts
      : discountedProducts.filter(item => item.category === filter);
  
    if (filtered.length === 0) {
      productGrid.innerHTML = "<p>No discounted products found.</p>";
      return;
    }
  
    filtered.forEach(product => {
      productGrid.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p class="price">
            <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
            <span class="new-price">$${product.newPrice.toFixed(2)}</span>
          </p>
        </div>
      `;
    });
  }
  
  function renderServices() {
    const serviceGrid = document.getElementById("serviceGrid");
    serviceGrid.innerHTML = "";
  
    discountedServices.forEach(service => {
      serviceGrid.innerHTML += `
        <div class="service-card">
          <h3>${service.name}</h3>
          <p class="description">${service.description}</p>
          <p class="price">
            <span class="old-price">$${service.oldPrice.toFixed(2)}</span>
            <span class="new-price">$${service.newPrice.toFixed(2)}</span>
          </p>
        </div>
      `;
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderServices();
  
    const filterDropdown = document.getElementById("categoryFilter");
    filterDropdown.addEventListener("change", (e) => {
      renderProducts(e.target.value);
    });
  });
  