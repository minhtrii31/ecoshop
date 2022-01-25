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
