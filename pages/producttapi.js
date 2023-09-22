// Ambil elemen kontainer produk
const productContainer = document.getElementById("productContainer");

// Fungsi untuk mengambil data produk dari API
async function fetchData() {
    try {
        const response = await fetch("https://crudcrud.com/api/YOUR_API_ENDPOINT"); // Ganti YOUR_API_ENDPOINT dengan URL API yang sesuai
        const data = await response.json();

        // Loop melalui produk dan tampilkan mereka di halaman
        data.forEach(product => {
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
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Panggil fungsi untuk mengambil data dari API saat halaman dimuat
fetchData();