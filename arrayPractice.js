// Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order(dont'
//actually reverse the array itself)

function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0 ; i--) {
    console.log(arr[i]);
  }
}

//write a function isUniform() which takes an array as an argument
//and returns true if all elements in the array are identical

function isUniform(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

//write a function sumArray() that accepts an array of numbers and
// returns the sum of all numbers in the array

function sumArray(arr) {
  let total = 0;
  arr.forEach(function(item) {
    total += Number(item);
  });
  return total;
}

//write a function max() that accepts an array of numbers and
//returns the maximum number in the array

function max(arr) {
  let num = Number(arr[0]);
  arr.forEach(function(item) {
    if (Number(item) > num) {
      num = Number(item);
    }
  });
  return num;
}