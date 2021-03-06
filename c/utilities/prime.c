#include <stdlib.h>

#include "./prime.h"
#include "./dArray.h"

void _strikeThrough(struct PrimeGenerator* self, int prime, int fstIndex) {
  for (int i = fstIndex; i < self->sieveLength; i += prime)
    self->sieve[i] = -1;
}

void _shiftSieve(struct PrimeGenerator* self) {
  for (int i = 0; i < self->sieveLength; i++)  // shift sieve
    self->sieve[i] = self->maxNumber + 1 + i;
  int startNumber = self->sieve[0];

  for(int i = 0; i < self->primes.length; i++) { // strike through multiple of previous found primes
    int prime = self->primes.array[i];
    int primeRemainder = startNumber % prime;
    int fstIndexToStrikeThrough = primeRemainder == 0
      ? 0
      : prime - primeRemainder;
    _strikeThrough(self, prime, fstIndexToStrikeThrough);
  }

  self->maxNumber += self->sieveLength;
  self->fstRelevantSieveIndex = 0;
}

int _nextPrime(struct PrimeGenerator* self) {
  for (int i = self->fstRelevantSieveIndex; i < self->sieveLength; i++) {
    if (self->sieve[i] != -1) {
      int nextPrime = self->sieve[i];
      self->primes.push(&(self->primes), nextPrime);
      self->fstRelevantSieveIndex = i + 1;

      _strikeThrough(self, nextPrime, i + nextPrime);

      return nextPrime;
    }
  }

  _shiftSieve(self);

  return _nextPrime(self);
}

struct PrimeGenerator createPrimeGenerator() {
  struct PrimeGenerator pg;
  pg.sieveLength = 1000;
  pg.maxNumber = pg.sieveLength;
  pg.sieve = malloc(pg.sieveLength * sizeof(int));
  for (int i = 0; i < pg.sieveLength; i++)
    pg.sieve[i] = i + 1;
  pg.fstRelevantSieveIndex = 1;
  pg.primes = createDintArray(256);
  pg.nextPrime = &_nextPrime;
  return pg;
}

struct DPrimeFactorArray getPrimeFactorization(struct PrimeGenerator* pg, long long n) {
  struct DPrimeFactorArray primeFactorization = createDPrimeFactorArray(4);

  // use existing primes of pg
  for (int i = 0; i < pg->primes.length; i++) {
    int prime = pg->primes.array[i];
    if (n % prime == 0) {
      PrimeFactor pf;
      pf.base = prime;
      pf.exponent = 0;
      while (n % prime == 0) {
        pf.exponent += 1;
        n = n / prime;
      }
      primeFactorization.push(&primeFactorization, pf);

      if (n == 1)
        return primeFactorization;
    }
  }

  // generate new primes until finished
  while (n != 1) {
    int prime = pg->nextPrime(pg);
    if (n % prime == 0) {
      PrimeFactor pf;
      pf.base = prime;
      pf.exponent = 0;
      while (n % prime == 0) {
        pf.exponent += 1;
        n = n / prime;
      }
      primeFactorization.push(&primeFactorization, pf);
    }
  }

  return primeFactorization;
}
