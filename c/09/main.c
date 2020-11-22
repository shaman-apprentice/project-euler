#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool isPythagoreanTriplet(int a, int b, int c) {
  return a * a + b * b == c * c;
}

int main() {
  int targetSum = 1000;
  for (int a = 1; a < targetSum; a++)
    for (int b = a; b < targetSum; b++) {
      int c = targetSum - a - b;
      if (isPythagoreanTriplet(a, b, c)) {
        printf("%d", a * b * c);
        exit(0);
      }
    }
}
