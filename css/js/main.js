// $(function () {
//     $('.nav-mobile').on('click', function () {
//         $(".navbar")
//             .css('display', 'flex')
//             .fadeIn('slow');
//     });

//     $('.nav-close').on('click', function () {
//         $(".navbar")
//             .css('display', 'none')
//             .fadeOut();
//     });
// });

// const navbar = document.querySelector('.navbar');

// window.onscroll = () => {
//     if (window.scrollY > 550) {
//         navbar
//             .classList
//             .add('navbar-scroll');
//     } else {
//         navbar
//             .classList
//             .remove('navbar-scroll');
//     }
// };

// Header Slider

var swiper = new Swiper(".slider", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


// Package and offers slider
var swiper = new Swiper(".package", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});


// Network Section Slider
// var swiper = new Swiper(".network", {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 10
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 30
//         },
//         767: {
//             slidesPerView: 3,
//             spaceBetween: 20
//         },
//         992: {
//             slidesPerView: 5,
//             spaceBetween: 20
//         }
//     }
// });
