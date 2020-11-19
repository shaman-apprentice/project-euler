#ifndef _PRIME_H_

#define _PRIME_H_

#include "./dArray.h"

struct PrimeGenerator {
  int sieveLength;
  int maxNumber;
  int* sieve;
  int fstRelevantSieveIndex;
  int nextPrimeIndex;
  struct DintArray primes;
  int (*nextPrime)(struct PrimeGenerator* self);
};
struct PrimeGenerator createPrimeGenerator(int sieveLength);

#endif
