#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include "../utilities/reverseStr.h"

bool isPalindromic(int n) {
  char str[7]; // size 7 cause last char of string is always `\0`
  sprintf(str, "%d", n);
  char strReversed[7];
  reverseStr(strcpy(strReversed, str)); // note that strrev returns pointer to inplace changed result, therefore copy first

  return strcmp(str, strReversed) == 0;
} 

int main() {
  int max = 0;
  for (int i = 999; i > 100; i--)
    for (int j = i; j > 100; j--) {
      int product = i * j;
      if (product > max && isPalindromic(product))
        max = product; 
    }

  printf("%d", max);
}
