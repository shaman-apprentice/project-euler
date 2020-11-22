#include <stdio.h>

#include "../utilities/prime.h"

int main() {
  struct PrimeGenerator pg = createPrimeGenerator();
  
  long long sum = 0;
  int prime = pg.nextPrime(&pg);
  while (prime < 2000000) {
    sum += prime;
    prime = pg.nextPrime(&pg);
  }

  printf("%lld", sum);
}
