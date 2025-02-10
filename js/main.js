$(function () {
  // ハンバーガーメニュー
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".header-nav a").on("click", function () {
    $("header").removeClass("open");
  });
  // 背景押したら戻る
  $(".header-nav").on("click", function () {
    $("header").removeClass("open");
  });

  




  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  
  $(window).scroll(function () {
    $(".fadein").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity" , "1");
        $(this).css("transform" , "translateY(0)");
      }
    });
  });


  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + 300) {
  //       $(this).addClass("");
  //     }
  //   });
  // });

  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       $(this).addClass("");
  //     }
  //   });
  // });

  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       $(this).addClass("");
  //     }
  //   });
  // });


  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       $(this).addClass("");
  //     }
  //   });
  // });

  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       $(this).addClass("");
  //     }
  //   });
  // });


  // $(window).scroll(function () {
  //   $("").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()-250) {
  //       $(this).addClass("");
  //     }
  //   });
  // });


  // $(window).scroll(function () {
  //   $(".user-right").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       // outerHeight()はpaddingを含めた高さを取得する
  //       $(this).addClass("fadein");
  //     }
  //   });
  // });

});
