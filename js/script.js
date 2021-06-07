// PC・スマホ共通動作
// スライダー
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000, // ms
  fade: true,
  speed: 1000, // ms
  cssEase: "linear",
});

const $win = $(window);

if ($win.width() > 768) {
  // PC版だけの動作
  // スティッキーヘッダー
  $(function () {
    $win.on("load scroll", function () {
      const $header = $(".header");
      const vScrollDist = $(this).scrollTop();
      const $fv = $(".fv");
      const fvHeight = $fv.outerHeight();
      const fixedClass = "fixed";

      if (vScrollDist > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    });
  });
} else {
  // スマホ版だけの動作
  // ハンバーガーボタン
  $(".burger-btn").on("click", function () {
    $(".header-nav").fadeToggle(300);
    $(".burger-btn").toggleClass("cross");
    $('body').toggleClass("noscroll");
  });
}
