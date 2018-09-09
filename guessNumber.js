let secretNumber = 4;

let guess = Number(prompt("Guess a number!"));


if (guess === secretNumber) {
  alert("You got it right!!!");
} else if (guess > secretNumber) {
  alert("This is too high, try again");
} else {
  alert("This is too low, try again");
}