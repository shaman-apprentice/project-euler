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

struct PrimeGenerator createPrimeGenerator(int sieveLength) {
  struct PrimeGenerator pg;
  pg.sieveLength = sieveLength;
  pg.maxNumber = sieveLength;
  pg.sieve = malloc(sieveLength * sizeof(int));
  for (int i = 0; i < sieveLength; i++)
    pg.sieve[i] = i + 1;
  pg.fstRelevantSieveIndex = 1;
  pg.primes = createDintArray(256);
  pg.nextPrime = &_nextPrime;
  return pg;
}
