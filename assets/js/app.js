// Show category
function showCategory() {
  var check = document.getElementById("nav").style.display;
  if (check == "block") {
    document.getElementById("nav").style.display = "none";
    document
      .getElementById("more")
      .setAttribute("name", "ellipsis-vertical-outline");
  } else {
    document.getElementById("nav").style.display = "block";
    document.getElementById("more").setAttribute("name", "close-outline");
  }
}
