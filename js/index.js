const heading = document.querySelector("#heading");

function changeHeading() {
  if (heading.textContent === "!") {
    heading.textContent = "?";
    heading.className = "quest";
  } else {
    heading.textContent = "!";
    heading.className = "bang";
  }
}

var count = 0;
var interval = setInterval(function() {
  changeHeading();
  count++;
  if (count > 2) {
    clearInterval(interval);
    heading.textContent = "i";
    heading.className = "";
  }
}, 2000);
