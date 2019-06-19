
$(document).ready(function () {
$('div.title').fadeIn(4000);

   $('.hamburger').on('click', function () {
      $('.menu').toggleClass('show');
   });

   $('.exit-responsive').on('click', function () {
      $('.menu').toggleClass('show');
   });
   AOS.init();
   
});
