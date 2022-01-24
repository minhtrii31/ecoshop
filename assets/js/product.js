$(".product-slider-img").click(function () {
  var dSrc = $(this).attr("src");
  $(".product-slider-img").css("border", "none");
  $(this).css("border", "1px solid black");
  console.log(dSrc);
  $("#img").attr("src", dSrc);
});
$("#seeMore").click(function () {
  $(this).css("display", "none");
  $("p.hidden").slideToggle("slow", function () {
    $("p.hidden").css("display", "block");
  });
  $("#seeLess").css("display", "block");
});
$("#seeLess").click(function () {
  $(this).css("display", "none");
  $("p.hidden").slideToggle("slow", function () {
    $("p.hidden").css("display", "none");
  });
  $("#seeMore").css("display", "block");
});
function showModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("content").style.display = "block";
}
function quitModal() {
  document.getElementById("content").style.display = "none";
  document.getElementById("modal").style.display = "none";
}
// Show big img
function showBigImg() {
  var currentImageSrc = $("#img").attr("src");
  $("#big-img-src").attr("src", currentImageSrc);
  document.getElementById("modal").style.display = "block";
  document.getElementById("img-big").style.display = "block";
}
// Close all
function closeBigImg() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("img-big").style.display = "none";
  document.getElementById("content").style.display = "none";
}
