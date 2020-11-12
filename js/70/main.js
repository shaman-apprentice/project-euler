const array = require('../utilities/array');
const { createPhi, isMutation } = require('./utilities');

console.time('calculating');
const max = 10 ** 1 - 1;
const phi = createPhi(max);
// todo min before isMutation
const candidates = array.filledArray(max, 2)
  .map(n => ({ n, phi: phi(n) }))
  .filter(o => isMutation(String(o.n), String(o.phi)));

let min = {
  n: candidates[0].n,
  nDividedThroughPhi: candidates[0].n / candidates[0].phi,
};
for (candidate of candidates.slice(1)) {
  const nDividedThroughPhi = candidate.n / candidate.phi;
  if (nDividedThroughPhi < min.nDividedThroughPhi) 
    min = { n: candidate.n, nDividedThroughPhi };
}
console.timeEnd('calculating'); // calculating: 3:35:43.615 (h:mm:ss.mmm)
console.log(min); // { n: 8319823, nDividedThroughPhi: 1.0007090511248113 }
