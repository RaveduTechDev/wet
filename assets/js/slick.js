// scroll kanan kiri bagian depan () => index paling utama
$('.scrollX').slick({
    autoPlay: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    prevArrow: '<i class="fa-solid fa-angle-left panah-kiri"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right panah-kanan"></i>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});