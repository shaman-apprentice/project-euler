#include <stdio.h>

int main() {
  int fibTmp1 = 1;
  int fibTmp2 = 2;
  int acc = 2;
  while (fibTmp2 < 4000000) {
    int nextFib = fibTmp2 + fibTmp1;
    if (nextFib % 2 == 0)
      acc += nextFib;

    fibTmp1 = fibTmp2;
    fibTmp2 = nextFib;
  }

  printf("%d", acc);
}
