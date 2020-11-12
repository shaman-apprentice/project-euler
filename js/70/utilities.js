const prime = require('../utilities/prime');

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

const isMutation = (s, t) => 
  s.split('').sort().join('') === t.split('').sort().join('')

module.exports = {
  createPhi,
  isMutation,
}
  