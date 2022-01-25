$(document).ready(function () {
  $(".content-faq-item").click(function () {
    var indexClass = $(this).index();
    var answer = $(".content-answer").eq(indexClass).css("display");
    if (answer == "none") {
      $(".content-answer").eq(indexClass).css("display", "block");
    } else {
      $(".content-answer").eq(indexClass).css("display", "none");
    }
  });
});
