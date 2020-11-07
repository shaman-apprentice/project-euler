const prime = require('../utilities/prime');

const n = 600851475143;
const primeFactorCandidates = prime.getPrimes(Math.floor(Math.sqrt(n + 1)));
for (let i = primeFactorCandidates.length - 1; i >= 0; i--)
  if (n % primeFactorCandidates[i] === 0) {
    console.log(primeFactorCandidates[i]);
    break;
  } 
