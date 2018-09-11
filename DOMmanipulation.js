//Come up with 4 different ways to select the first <p> tag

var wayOne = document.getElementById("first");
var wayTwo = document.querySelector("#first");
var wayThree = document.querySelector(".special");
var wayFour = document.querySelector("p");

console.log(wayOne);
console.log(wayTwo);
console.log(wayThree);
console.log(wayFour);

//Toggle the body's background color between purple and white,
//when button is clicked

var click = document.getElementById("clickme");
var body = document.querySelector("body");

function changeBackground() {
  if (body.style.background == "blue") {
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
}

click.addEventListener("click", changeBackground);