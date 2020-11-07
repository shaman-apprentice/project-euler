/** start and end is inclusive */
const filledArray = (start = 0, end = 100) => {
  const result = new Array(end - start + 1);
  for (let i = 0; start + i <= end; i++)
    result[i] = start + i;

  return result;
}

function strikeThrough(sieve, prime, fstIndex) {
  for (let i = fstIndex; i < sieve.length; i += prime)
    sieve[i] = null;
}

/** Sieve of Eratosthenes 
 * @param sieveLength: Length of sieve to hold in RAM
 */
function* generatePrimes(sieveLength = 10) {
  const primes = [];
  let maxNumber = sieveLength;

  let sieve = filledArray(2, sieveLength);
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
      sieve = filledArray(maxNumber + 1, maxNumber + sieveLength);
      const startNumber = sieve[0]; // save in case it gets struck through 
      primes.forEach(prime => { // sieve through multiples of already known primes
        const primeRemainder = startNumber % prime;
        fstIndexToStrikeThrough = primeRemainder === 0
          ? 0
          : prime - primeRemainder;
        strikeThrough(sieve, prime, fstIndexToStrikeThrough)
      });
      maxNumber = maxNumber + sieveLength;
      fstRelevantSieveIndex = 0;
    }
  }
}

function getPrimes(max = 1000) {
  const primes = []
  for (const prime of generatePrimes()) {
    if (prime > max)
      return primes;

    primes.push(prime);
  }
}

module.exports = {
  getPrimes,
  generatePrimes,
}
