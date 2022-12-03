

// $(function() {     
//   $('.nav-mobile').on('click',function() {
//      $(".navbar").css(
//       'display', 'flex'
//      ).fadeIn('slow');
//   });

//   $('.nav-close').on('click',function() {
//     $(".navbar").css(
//      'display', 'none'
//     ).fadeOut();
//  });
// });

// const navbar = document.querySelector('.navbar');

// window.onscroll = () => {
//     if (window.scrollY > 550) {
//         navbar.classList.add('navbar-scroll');
//     } else {
//         navbar.classList.remove('navbar-scroll');
//     }
// };

var swiper = new Swiper(".slider", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});