// an array of available products
const products = [
  {
    name: 'African Luxury Textile Dress',
    image: 'assets/Artisans-Profile-img/image-1.jpeg',
    description: 'Handwoven bold and stylish luxury African textile dress .',
    price: 999
  },

  {
    name: '"Isiagu" Traditional Igbo Attire',
    image: 'assets/Artisans-Profile-img/image-2.jpeg',
    description: '"Isiagu" gold, blue with short sleeve and velvet pant.',
    price: 566
  },

  {
    name: 'Handwoven Akwete Dress/Suit',
    image: 'assets/Artisans-Profile-img/image-4.jpeg',
    description: 'Bold and stylish dress and suit made from Akwete fabric.',
    price: 899
  },

  {
    name: 'African Luxury Textile Dress',
    image: 'assets/Artisans-Profile-img/image-1.jpeg',
    description: 'Handwoven bold and stylish luxury African textile dress .',
    price: 999
  },

  {
    name: '"Isiagu" Traditional Igbo Attire',
    image: 'assets/Artisans-Profile-img/image-2.jpeg',
    description: '"Isiagu" gold, blue with short sleeve and velvet pant.',
    price: 566
  },

  {
    name: 'Handwoven Akwete Dress/Suit',
    image: 'assets/Artisans-Profile-img/image-4.jpeg',
    description: 'Bold and stylish dress and suit made from Akwete fabric.',
    price: 899
  }
];

// get the product container from the DOM
const productList = document.getElementById('productList');

// looping throught the products array functionality
products.forEach((product) => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="details">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="product-price">
        $${product.price / 100}
        <span>
          <button class="buy-now">Add to Cart</button>
        </span>
      </p>
    </div>
  `;
  productList.appendChild(productCard);
});

// get the product image from the DOM
const productImage = document.querySelectorAll('.js-products-list img');

// Product image mouseover functionality
productImage.forEach((image) => {
  image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.2)';
      image.style.height = '180px';
      image.style.marginBottom = '30px';
  });
});

// remove mouseover event when mouseout functionality
productImage.forEach((image) => {
  image.addEventListener('mouseout', () => {
    image.style.transform = '0';
    image.style.height = '165px';
    image.style.marginBottom = '15px';
  });
});

// Button click functionality
const buttons = document.querySelectorAll('.buy-now');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.innerHTML = 'Added';
    button.style.marginLeft = '95px';
  
    setTimeout(() => {
      button.innerHTML = 'Add to Cart';
      button.style.marginLeft = '70px';
    }, 1000)
  });
});