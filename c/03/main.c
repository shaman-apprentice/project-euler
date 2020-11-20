#include <stdio.h>

#include "../utilities/prime.h"
#include "../utilities/dArray.h"
#include "../utilities/PrimeFactor.h"

int main() {
  struct DPrimeFactorArray primeFactorization = getPrimeFactorization(600851475143);
  printf("%d\n", primeFactorization.array[primeFactorization.length - 1].base);
}
