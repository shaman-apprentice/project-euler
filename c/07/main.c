#include <stdio.h>

#include "../utilities/prime.h"

int main() {
  struct PrimeGenerator pg = createPrimeGenerator();
  for (int i = 0; i < 10000; i++)
    pg.nextPrime(&pg);

  printf("%d", pg.nextPrime(&pg));
}
