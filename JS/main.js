$("document").ready(function(){
   // ====== hamburger menu ====== //
   $('.hamburger').on('click', function(){
      $('.nav').addClass('open');
   });

   $('.exit-responsive').on('click', function(){
      $('.nav').removeClass('open');
   });

   $('.nav__link').on('click', function(){
      $('.nav').removeClass('open');
   });
});
