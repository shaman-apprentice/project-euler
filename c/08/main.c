#include <stdio.h>
#include <string.h>

#define digitSize 13

long long numberStr2Prod(char nStr[]) {
  long long prod = 1;
  for (int i = 0; i < digitSize; i++)
    prod *= (nStr[i] - '0');

  return prod;
}

int main() {
  FILE* f = fopen("files/08.txt", "r");

  // init product of fst 13 digit number and save it as max
  char numberStr[digitSize];
  fscanf(f, "%13c", numberStr);
  long long max = numberStr2Prod(numberStr);

  // move through string and find max 13 digit number
  char nextChar;
  int scanReturn = fscanf(f, "%c", &nextChar);
  while (scanReturn != EOF) {
    if (nextChar == '\n') {
      scanReturn = fscanf(f, "%c", &nextChar);
      continue;
    }

    memmove(&numberStr[0], &numberStr[1], (digitSize - 1) * sizeof(char));
    numberStr[digitSize - 1] = nextChar;

    long long n = numberStr2Prod(numberStr);
    if (n > max)
      max = n;

    scanReturn = fscanf(f, "%c", &nextChar);
  }

  printf("%lld", max);
}
