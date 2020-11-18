#ifndef _PRIME_H_

#define _PRIME_H_

struct PrimeGenerator {
  int sieveLength;
  int maxNumber;
  int sieve[100]; // todo replace with dynamic length array
  int fstRelevantSieveIndex;
  int nextPrimeIndex;
  int primes[100]; // todo replace with dynamic length array
  int (*nextPrime)(struct PrimeGenerator* self);
};
struct PrimeGenerator createPrimeGenerator(int sieveLength);

#endif

