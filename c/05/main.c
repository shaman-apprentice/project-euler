#include <stdio.h>
#include <stdbool.h>

int main() {
  int candidate = 2520;
  bool isCandidateProvenWrong = false;
  while (!isCandidateProvenWrong) {
    isCandidateProvenWrong = true;
    for (int i = 2; i <= 20; i++) {
      if (candidate % i != 0) {
        candidate += 1;
        isCandidateProvenWrong = false;
        break;
      }
    }
  }
  
  printf("%d", candidate);
}
