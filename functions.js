//Write a function isEven() which takes a single numeric argument
//and returns true if the number is even, and false otherwise

function isEven(num) {
  if (typeof(num) === "number") {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  else return "Please type in a number";
}

//write a function factorial() which takes a single numeric argument
//and returns the factorialof that number

function factorial(num) {
  if (typeof(num) === "number") {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
  else return "Please type in a number";
}

//write a function kebabToSnake() which takes a single kebab-cased
//string argument and returns the snake_cased version.

function kebabToSnake(str) {
  if(typeof(str) === "string") {
    let snake = str.replace(/-/g, "_");
    return snake;
  }
  else return "Please type in a string";
}