$(".product-slider-img").click(function () {
  var dSrc = $(this).attr("src");
  $(".product-slider-img").css("border", "none");
  $(this).css("border", "1px solid black");
  console.log(dSrc);
  $("#img").attr("src", dSrc);
});
$("#seeMore").click(function () {
  $(this).css("display", "none");
  $(".hidden").slideToggle("slow", function () {
    $(".hidden").css("display", "block");
  });
  $("#seeLess").css("display", "block");
});
$("#seeLess").click(function () {
  $(this).css("display", "none");
  $(".hidden").slideToggle("slow", function () {
    $(".hidden").css("display", "none");
  });
  $("#seeMore").css("display", "block");
});
function showModal() {
  document.getElementById("modal").style.display = "block";
}
function quitModal() {
  document.getElementById("modal").style.display = "none";
}
