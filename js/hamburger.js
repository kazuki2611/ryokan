$(function () {

    $(".is-hamburger").on( 'click', function () {


        $(this).toggleClass("is-open")

    });
    
    
    


});




   // 画面リサイズでリロードさせる設定
   var timer = 0;
   var currentWidth = window.innerWidth;
 $(window).resize(function(){
       if (currentWidth == window.innerWidth) {
           return;
       }
       if (timer > 0) {
           clearTimeout(timer);
       }

       timer = setTimeout(function () {
           location.reload();
       }, 200);

 });

