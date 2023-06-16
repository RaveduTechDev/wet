// scroll kanan kiri bagian depan () => index paling utama
$('.scrollX').slick({
    autoPlay: true,
    dots: false,
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
        }, 
        {
            breakpoint: 450,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});