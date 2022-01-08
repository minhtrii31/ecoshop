$(document).ready(function () {
  $(".body-list-item-thumn-img").hover(
    function () {
      var scrDefault = $(this).src;
      $(this).attr("src", scrDefault + "_b");
    },
    function () {
      $(this).attr("src", scrDefault);
    }
  );
});
