// Typing text effect
var index = 0;
var txt =
  "Established in 2022, we are a new brand with big ambitions. We want to provide all of our customers with the best possible items that are fashionable, easy to wear and easy to match.";
var speed = 50;
window.onload = function typingTxt() {
  if (index < txt.length) {
    document.getElementById("typing-text").innerHTML += txt.charAt(index);
    index++;
    setTimeout(typingTxt, 100);
  }
};
// Alert box
var _name = document.getElementById("name").value;
var _email = document.getElementById("email").value;
function onClick() {
  if (_name.length == 0 || _email.length == 0) {
    alert("Please fill full all information!");
  } else {
    alert("Subscribe successfully!");
  }
}
