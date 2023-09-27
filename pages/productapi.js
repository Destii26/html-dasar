// JavaScript untuk mengatur carousel
const carousel = document.querySelector(".carousel");
const productCards = document.querySelectorAll(".product-card");
let currentIndex = 0;

// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = productCards.length - 1;
  }
  updateCarousel();
}

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
  if (currentIndex < productCards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Fungsi untuk memperbarui tampilan carousel
function updateCarousel()
  const offset = -currentIndex * (productCards[0].offsetWidth + 20); // Lebar produk + margin
  carousel.style.transform = translateX(${offset}px); 

// Array objek produk

(async function () {
  let resp = await fetch("https://65123e1eb8c6ce52b3957319.mockapi.io/produk");
  let data = await resp.json();
  console.log(data);

  // Ambil elemen kontainer produk
  const productContainer = document.getElementById("productContainer");

  // Loop melalui produk dan tampilkan mereka di halaman
  data.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImage = document.createElement("img");
    productImage.src = product.imageSrc;

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price;

    const beliButton = document.createElement("button");
    beliButton.classList.add("beli-button");
    beliButton.textContent = "Beli";

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(beliButton);

    productCard.appendChild(productImage);
    productCard.appendChild(productDetails);

    productContainer.appendChild(productCard);
  });
})();
