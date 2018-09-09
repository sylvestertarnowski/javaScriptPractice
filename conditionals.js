let age = Number(prompt("What is your age?"));

if (age <= 0) {
  console.log("ERROR");
} else if (age == 21) {
  console.log("Happy 21st birthday!");
} else if (Math.sqrt(age) % 1 === 0) {
  console.log("Perfect square!");
} else if (age % 2 !== 0) {
  console.log("Your age is odd!");
} else {
  console.log("Thanks for nothing");
}