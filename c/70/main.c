#include <stdio.h>
#include <math.h>

#include "./utilities.h"
#include "../utilities/prime.h"

int main() {
  int max = pow(10, 4);
  struct PrimeGenerator pg = createPrimeGenerator();

  // printf("%d", isMutation(1018, 1017));
  //printf("%d", phi(pg, 1018));

  int minN = -1;
  double minNDividedThroughPhi = max;
  for (int n = 2; n < max; n++) {
    printf("before phi - ");
    int phiOfN = phi(&pg, n); // 1018 -.-
    printf("after phi - ");
    double nDividedThroughPhi = ((double) n) / phiOfN;
    printf("%d %d %f\n", n, phiOfN, nDividedThroughPhi);
    if (nDividedThroughPhi < minNDividedThroughPhi && isMutation(n, phiOfN)) {
      minN = n;
      minNDividedThroughPhi = nDividedThroughPhi;
    }
  }
  printf("n: %d, nDividedThroughPhi: %f", minN, minNDividedThroughPhi);
}
