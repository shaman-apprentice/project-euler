const prime = require('./prime');

describe('`getPrimes`', () => {
  it('gets correct primes < 10', () => {
    expect(prime.getPrimes(10)).toEqual([ 2, 3, 5, 7 ]);
  });

  it('gets correct primes < 100', () => {
    expect(prime.getPrimes(100, 10)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    ]);
  });
});

describe('`getPrimeFactorization`', () => {
  const primes = [ 2, 3 ];

  it('calculates correct prime factorization of 1', () => {
    expect(prime.getPrimeFactorization(primes, 2)).toEqual([
      { base: 2, exponent: 1 },
    ]);
  });

  it('calculates correct prime factorization of 18', () => {
    expect(prime.getPrimeFactorization(primes, 18)).toEqual([
      { base: 2, exponent: 1 },
      { base: 3, exponent: 2 },
    ]);
  });

  it('throws if not given enough primes', () => {
    expect(() => { prime.getPrimeFactorization(primes, 10) }).toThrow(
      'given primes [2,3] are to low, to calc prime factorization of 10'
    );
  });
});
