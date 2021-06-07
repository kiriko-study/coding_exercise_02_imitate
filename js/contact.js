if ($(window).width() <= 768) {
  // ハンバーガーボタン
  $(".burger-btn").on("click", function () {
    $(".header-nav").fadeToggle(300);
    $(".burger-btn").toggleClass("cross");
    $('body').toggleClass("noscroll");
  });
}
