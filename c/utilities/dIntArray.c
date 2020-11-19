#include "stdlib.h"

#include "./dIntArray.h"

void _push(struct DIntArray* self, int elem) {
  if (self->nextIndex >= self->size) {
    self->size *= 2;
    self->array = realloc(self->array, self->size);
  }

  self->array[self->nextIndex++] = elem;
}

struct DIntArray createDIntArray(int initialSize) {
  struct DIntArray darray;
  darray.size = initialSize;
  darray.nextIndex = 0;
  darray.array = malloc(initialSize * sizeof(int));
  darray.push = &_push;
  return darray;
}
