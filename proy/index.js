await App.loadScript('https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js');
// Ahora inicializa Swiper
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
console.log("Swiper inicializado después de cargar el HTML");