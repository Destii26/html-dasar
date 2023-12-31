// JavaScript untuk mengatur carousel
const carousel = document.querySelector('.carousel');
const productCards = document.querySelectorAll('.product-card');
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
function updateCarousel() {
    const offset = -currentIndex * (productCards[0].offsetWidth + 20); // Lebar produk + margin
    carousel.style.transform = `translateX(${offset}px)`;
}
// Array objek produk
const products = [
    {
        name: "Product 1",
        description: "purple smlaaa",
        price: "Rp2.100.000",
        imageSrc: "../assets/gambar2.jpg"
    },
    {
        name: "Product 2",
        description: "lilac mill",
        price: "Rp.2.990.00",
        imageSrc: "../assets/gambar1.jpg"
    },
    {
        name: "Product 3",
        description: "white diamond",
        price: "Rp.2.590.00",
        imageSrc: "../assets/gambar3.jpg"
    },
    {
        name: "Product 4",
        description: "gllosy blue",
        price: "Rp.3.990.00",
        imageSrc: "../assets/gambar4.jpg"
    },
    {
        name: "Product 5",
        description: "purple piacess",
        price: "Rp.3.679.000",
        imageSrc: "../assets/gambar5.jpg"
    },
    {
        name: "Product 6",
        description: "gllosy lilac",
        price: "Rp.5.990.00",
        imageSrc: "../assets/gambar6.jpg"
    },
    {
        name: "Product 7",
        description: "dusty woll",
        price: "Rp.3.990.00",
        imageSrc: "../assets/gambar7.jpg"
    },
    {
        name: "Product 8",
        description: "black star",
        price: "Rp4.000.000",
        imageSrc: "../assets/gambar8.jpg"
    },
    {
        name: "Product 9",
        description: "white diamond calss",
        price: "Rp.5.690.000",
        imageSrc: "../assets/gambar9.jpg"
    },
    {
        name: "Product 10",
        description: "sllim white star",
        price: "Rp.7.000.000",
        imageSrc: "../assets/gambar10.jpg"
    },
    {
        name: "Product 11",
        description: "sholder dress white",
        price: "Rp.6.990.00",
        imageSrc: "../assets/gambar11.jpg"
    },
    {
        name: "Product 12",
        description: "blue star diamond",
        price: "Rp.4.990.00",
        imageSrc: "../assets/gambar12.jpg"
    }
];

// Ambil elemen kontainer produk
const productContainer = document.getElementById("productContainer");

// Loop melalui produk dan tampilkan mereka di halaman
products.forEach(product => {
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
