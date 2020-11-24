#include <math.h>
#include <string.h>
#include <stdlib.h> 
#include <stdio.h>

#include "../utilities/prime.h"
#include "../utilities/PrimeFactor.h"
#include "../utilities/dArray.h"
#include "./utilities.h"

int phi(struct PrimeGenerator* pg, int n) {
  struct DPrimeFactorArray primeFactorization = getPrimeFactorization(pg, n);
  
  int phi = 1;
  for (int i = 0; i < primeFactorization.length; i++) {
    PrimeFactor pf = primeFactorization.array[i];
    double pToPowerOfK = pow(pf.base, pf.exponent);
    phi *= (pToPowerOfK - pToPowerOfK / pf.base);
  }
  return phi;
}

int _cmpChar(const void *a, const void *b) {
  return *(char*)a - *(char*)b;
}

bool isMutation(int m, int n) {
  int lengthOfM = snprintf( NULL, 0, "%d", m);
  char* s = malloc((lengthOfM + 1) * sizeof(char));
  snprintf(s, lengthOfM + 1, "%d", m);

  int lengthOfn = snprintf( NULL, 0, "%d", n);
  char* t = malloc((lengthOfn + 1) * sizeof(char));
  snprintf(t, lengthOfn + 1, "%d", n);

  qsort(s, lengthOfM, sizeof(char), _cmpChar);
  qsort(t, lengthOfn, sizeof(char), _cmpChar);
  return strcmp(s, t) == 0;
}
