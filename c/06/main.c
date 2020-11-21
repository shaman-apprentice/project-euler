#include <stdio.h>
#include <math.h>

int main() {
  double sumOfSquares = 0;
  for (int i = 1; i <= 100; i++)
    sumOfSquares += pow(i, 2);

  double squareOfSums = pow(100 * 101 / 2, 2);

  printf("%f", squareOfSums - sumOfSquares);
}
