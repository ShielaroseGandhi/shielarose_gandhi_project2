$("document").ready(function(){
   // ====== hamburger menu ====== //
   $('.hamburger').on('click', function(){
      $('.nav-content').addClass('open');
      $('.nav-content').removeClass('wrapper');
   });

   $('.exit-responsive').on('click', function(){
      $('.nav-content').removeClass('open');
   });
});
