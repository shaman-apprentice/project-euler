#include <stdio.h>
#include "../utilities/prime.h"

int main() {
  struct PrimeGenerator pg = createPrimeGenerator(10);
  for (int i = 0; i < 20; i++)
    printf("%d\n", pg.nextPrime(&pg));
}
