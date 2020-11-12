const prime = require('../utilities/prime');
const array = require('../utilities/array');

/** @param max max-value for n */
const createPhi = (max) => {
  // This alg utilizes that in case of p being prime:
  // - phi(p^k) = p^k - p^k/p as p^k is only dividable by multiple of p
  // - phi(m*n) = phi(m) * phi(n) if gcd(m, n) = 1
  const primes = prime.getPrimes(max);

  return (n) => 
    prime.getPrimeFactorization(primes, n).reduce((acc, pF) => {
      const pToPowerOfK = pF.base ** pF.exponent;
      return acc * (pToPowerOfK - pToPowerOfK / pF.base);
    }, 1)
}

const getMutations = (s) => {
  if (s.length <= 1)
    return [ s ];

  const indexes = array.filledArray(s.length - 1, 0);
  return indexes.reduce((acc, i) => {
    const fstChar = s[i];
    const restStr = s.slice(0, i) + s.slice(i + 1)
    const mutationsWithFstChar = getMutations(restStr)
      .map(mutation => fstChar + mutation);
    acc.push(...mutationsWithFstChar);
    return acc;
  }, []);
}

const isMutation = (s, t) => 
  getMutations(s).includes(t)

console.time('calculating');
const max = 10 ** 7 - 1;
const phi = createPhi(max);
// todo optimize isMutation
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

module.exports = {
  createPhi,
  getMutations,
  isMutation,
}
