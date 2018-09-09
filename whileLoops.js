// Print all numbers between -10 and 19

let number = -10;

while (number <= 19) {
  console.log(number);
  number++;
}

let even = 10;

while (even <= 40) {
  console.log(even);
  even += 2;
}

let odd = 300;

while (odd <= 333) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
  odd++;
}

let fb = 5;

while (fb <= 50) {
  if (fb % 5 === 0 && fb % 3 === 0) {
    console.log(fb);
  }
  fb++;
}