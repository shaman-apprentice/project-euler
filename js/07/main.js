const prime = require('../utilities/prime');

let i = 1;
for (const p of prime.generatePrimes()) {
  if (i === 10001) {
    console.log(p);
    break;
  }

  i += 1;
}
