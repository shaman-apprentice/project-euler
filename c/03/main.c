#include <stdio.h>
#include "../utilities/prime.h"

typedef void nextTest(struct TestStruct *self);
struct TestStruct {
  struct TestStruct* self;
  int counter;
  nextTest* next;
};

void myNext(struct TestStruct* t) {
  t->counter += 1;
  printf("Ich zaehle: %d\n", t->counter);
}

int main() {
  printf("%d\n", add(22, 20));

  struct TestStruct t;
  t.self = &t;
  t.counter = 0;
  t.next = &myNext;

  for (int i = 0; i < 3; i++)
    t.next(t.self);
}
