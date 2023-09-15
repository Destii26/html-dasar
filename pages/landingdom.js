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
