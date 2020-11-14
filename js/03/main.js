const prime = require('../utilities/prime');

const primeFactorization = prime.getPrimeFactorization(prime.generatePrimes(), 600851475143);
console.log(primeFactorization[primeFactorization.length - 1].base);
