const isPythagoreanTriplet = (a, b, c) =>
  a**2 + b**2 === c**2

const targetSum = 1000;
for (let a = 1; a < targetSum; a++) 
  for (let b = a; b < targetSum; b++) {
    const c = targetSum - a - b;
    if (isPythagoreanTriplet(a, b, c)) {
      console.log(a * b * c);
      break;
    }
  }
