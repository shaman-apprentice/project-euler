const array = require('./array');

function strikeThrough(sieve, prime, fstIndex) {
  for (let i = fstIndex; i < sieve.length; i += prime)
    sieve[i] = null;
}

/** Sieve of Eratosthenes 
 * @param sieveLength: Length of sieve to hold in RAM
 */
function* generatePrimes(sieveLength = 1000) {
  const primes = [];
  let maxNumber = sieveLength;

  let sieve = array.filledArray(sieveLength, 2);
  let fstRelevantSieveIndex = 0;
  while (true) {
    let foundPrime = false;
    for (let i = fstRelevantSieveIndex; i < sieve.length; i++) {
      if (sieve[i] !== null) {
        foundPrime = true;
        const nextPrime = sieve[i];
        primes.push(nextPrime);
        yield nextPrime;

        fstRelevantSieveIndex = i + 1;

        strikeThrough(sieve, nextPrime, i + nextPrime);

        break;
      }
    }

    if (foundPrime === false) { // shift sieve, as there are no more primes in current sieve
      sieve = array.filledArray(maxNumber + sieveLength, maxNumber + 1);
      const startNumber = sieve[0]; // save in case it gets struck through 
      primes.forEach(prime => { // sieve through multiples of already known primes
        const primeRemainder = startNumber % prime;
        fstIndexToStrikeThrough = primeRemainder === 0
          ? 0
          : prime - primeRemainder;
        strikeThrough(sieve, prime, fstIndexToStrikeThrough);
      });
      maxNumber += sieveLength;
      fstRelevantSieveIndex = 0;
    }
  }
}

const getPrimes = (max = 1000, sieveLength = 1000) => {
  const primes = []
  for (const prime of generatePrimes(sieveLength)) {
    if (prime > max)
      return primes;

    primes.push(prime);
  }
}

/** @return [{ base, exponent }] */
const getPrimeFactorization = (primes, n) => {
  const primeFactorization = [];
  let m = n;
  
  for (const prime of primes) {
    if (m % prime === 0) {
      let exponent = 0;
      while (m % prime === 0) {
        exponent += 1;
        m = m / prime;
      }
      primeFactorization.push({ base: prime, exponent });

      if (m === 1)
        return primeFactorization;
    }
  }
  
  throw new Error(`given primes [${primes}] are to low, to calc prime factorization of ${n}`);
}

const createGetPrimeFactorizationWithDynamicCachedPrimes = () => {
  const primeGenerator = generatePrimes()
  const primes = [ primeGenerator.next().value ]

  const getPF = (n, startIndex = 0) => {
    const primeFactorization = [];

    for (let i = startIndex; i < primes.length; i++) {
      const prime = primes[i]

      if (n % prime === 0) {
        let exponent = 0;
        while (n % prime === 0) {
          exponent += 1;
          n = n / prime;
        }
        primeFactorization.push({ base: prime, exponent });
  
        if (n === 1)
          return primeFactorization;
      }
    }

    for (let i = 0; i < 1000; i++)
      primes.push(primeGenerator.next().value)

    primeFactorization.push(...getPF(n, primes.length - 1000))

    return primeFactorization
  }

  return getPF
}

module.exports = {
  getPrimes,
  generatePrimes,
  getPrimeFactorization,
  createGetPrimeFactorizationWithDynamicCachedPrimes
}
