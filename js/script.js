
$(function () {
  $('.is-hamburger, .p-hamburger__single').click(function () {
    $('.p-dropdown-menu__list').slideToggle();
  });
});

$(function () {
  // 表示切り替え
  $(function() {
 
    // ①タブをクリックしたら発動
    $('.tab li').click(function() {
   
      // ②クリックされたタブの順番を変数に格納
      var index = $('.tab li').index(this);
   
      // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
      $('.tab li').removeClass('active');
   
      // ④クリックされたタブにクリック済みデザインを適用する
      $(this).addClass('active');
   
      // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
      $('.p-news__inner').removeClass('show').eq(index).addClass('show');
   
    });
  });
});

// jQuery(function ($) {

//   //質問をクリック
//   $(".c-faq__titile").click(function () {




//     $(".c-faq__titile").not(this).next().slideUp(300);




//     $(this).next().slideToggle(300);


//   });
//   $(window).resize(function () {
//     $(".p-dropdown-menu__list").css('display', '');
//   });
// });
// $(document).ready(function () {

//   $('#form').submit(function (event) {
//     var formData = $('#form').serialize();
//     $.ajax({
//       url: "https://docs.google.com/forms/hogehoge",
//       data: formData,
//       type: "POST",
//       dataType: "xml",
//       statusCode: {
//         0: function () {
//           $(".end-message").slideDown();
//           $(".submit-btn").fadeOut();
//           //window.location.href = "thanks.html";
//         },
//         200: function () {
//           $(".false-message").slideDown();
//         }
//       }
//     });
//     event.preventDefault();
//   });

  
// });



