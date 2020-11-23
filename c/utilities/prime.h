#ifndef _PRIME_H_

#define _PRIME_H_

#include "./dArray.h"

struct PrimeGenerator {
  int sieveLength;
  int maxNumber;
  int* sieve;
  int fstRelevantSieveIndex;
  struct DintArray primes;
  int (*nextPrime)(struct PrimeGenerator* self);
};
struct PrimeGenerator createPrimeGenerator();

struct DPrimeFactorArray getPrimeFactorization(struct PrimeGenerator pg, long long n);

#endif
