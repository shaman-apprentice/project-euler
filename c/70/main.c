#include <stdio.h>
#include <math.h>
#include <time.h> 

#include "./utilities.h"
#include "../utilities/prime.h"

int main() {
  clock_t startTime = clock();

  int max = pow(10, 7);
  struct PrimeGenerator pg = createPrimeGenerator();

  int minN = -1;
  double minNDividedThroughPhi = max;
  for (int n = 2; n < max; n++) {
    int phiOfN = phi(&pg, n);
    double nDividedThroughPhi = ((double) n) / phiOfN;
    if (nDividedThroughPhi < minNDividedThroughPhi && isMutation(n, phiOfN)) {
      minN = n;
      minNDividedThroughPhi = nDividedThroughPhi;
    }
  }

  double calcTime = (double)(clock() - startTime);
  printf("%f\n", calcTime / CLOCKS_PER_SEC); // 2082.124000s ~34min
  printf("n: %d, nDividedThroughPhi: %f", minN, minNDividedThroughPhi); // n: 8319823, nDividedThroughPhi: 1.000709
}
