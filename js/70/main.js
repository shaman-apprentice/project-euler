const array = require('../utilities/array');
const prime = require('../utilities/prime');

/** @param max max-value for m and n*/
const createIsRelativePrime = (max) => {
  const primes = prime.getPrimes(max);

  return (m, n) => {
    primeFactorizationOfM = prime.getPrimeFactorization(primes, m);
    primeFactorizationOfN = prime.getPrimeFactorization(primes, n);
    return !primeFactorizationOfM.some(p => primeFactorizationOfN.includes(p));
  }
}

/** @param max max-value for n */
const createPhi = (max) => {
  const isRelativePrime = createIsRelativePrime(max);

  return (n) =>
    array.filledArray(n - 1).filter(m => isRelativePrime(m, n)).length;
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

console.time('calc phi');
const phi = createPhi(10**7 - 1);
// console.log(phi(87109));  // 79180
console.log(phi(10**7 - 1)); // 6637344
console.timeEnd('calc phi');

module.exports = {
  createIsRelativePrime,
  createPhi,
  getMutations,
  isMutation,
}
