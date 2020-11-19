#include <stdio.h>

#include "../utilities/prime.h"
#include "../utilities/dArray.h"
#include "../utilities/PrimeFactor.h"

int main() {
  struct DPrimeFactorArray pfs = createDPrimeFactorArray(2);
  for (int i = 0; i < 3; i++) {
    PrimeFactor pf;
    pf.base = 42;
    pf.exponent = i;
    pfs.push(&pfs, pf);
  }

  printf("size: %d, 3. value: %d ^ %d\n", pfs.size, pfs.array[2].base, pfs.array[2].exponent);

  // struct PrimeGenerator pg = createPrimeGenerator(10);
  // for (int i = 0; i < 20; i++)
  //   printf("%d\n", pg.nextPrime(&pg));
}
