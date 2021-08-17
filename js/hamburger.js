$(function () {

    $(".is-hamburger , .p-hamburger__single").on('click', function () {


        $(this).toggleClass("is-open")
        $("html").toggleClass("is-open")


    });





});
// $(function () {

//     $(".modal").on('click', function () {



//         $("html").toggleClass("is-open");


//     });





// });




// 画面リサイズでリロードさせる設定
var timer = 0;
var currentWidth = window.innerWidth;
$(window).resize(function () {
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

