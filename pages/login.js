// login.js
function adjustLayout() {
    const container = document.querySelector('.container');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    if (window.innerWidth <= 768) {
        // Tampilan layar kecil (misalnya, ponsel)
        container.style.flexDirection = 'column';
        left.style.width = '100%';
        right.style.width = '100%';
    } else {
        // Tampilan layar besar (misalnya, tablet dan desktop)
        container.style.flexDirection = 'row';
        left.style.width = '50%';
        right.style.width = '50%';
    }
}

// Panggil fungsi adjustLayout saat halaman dimuat dan saat ukuran layar berubah
window.onload = adjustLayout;
window.onresize = adjustLayout;
