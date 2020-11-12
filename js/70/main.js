const array = require('../utilities/array');
const { createPhi, isMutation } = require('./utilities');

console.time('calculating');

const max = 10 ** 7 - 1;
const phi = createPhi(max);

let min = { n: -1, nDividedThroughPhi: max };
for (let n of array.filledArray(max, 2)) {
  const phiOfN = phi(n);
  const nDividedThroughPhi = n / phiOfN;
  if (nDividedThroughPhi < min.nDividedThroughPhi && isMutation(String(n), String(phiOfN)))
    min = { n, nDividedThroughPhi };
}

console.timeEnd('calculating'); // calculating: 26:23.839 (m:ss.mmm)
console.log(min); // { n: 8319823, nDividedThroughPhi: 1.0007090511248113 }
