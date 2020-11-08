const prime = require('../utilities/prime');

console.log(prime.getPrimes(2000000).reduce((acc, p) => acc + p, 0));
