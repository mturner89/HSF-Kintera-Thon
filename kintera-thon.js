$(document).ready(function() {
  $(".nav-menu").click(function() {
    $(".nav-items").fadeIn(600);
    $(".nav-items").toggleClass('nav-items-toggle');
    if ($(".nav-items").hasClass('nav-items-toggle')) {
      $(".nav-items").css({
        display: "block"
      });
    } else {
      $(".nav-items").css({
        display: "none"
      });
      $(".nav-items").fadeOut(300);
    }
  });
});
