#include "stdlib.h"

#include "./dArray.h"
#include "./PrimeFactor.h"

#define deriveDArray(T) \
void _push##T(struct D##T##Array* self, T elem) { \
  if (self->nextIndex >= self->size) { \
    self->size *= 2; \
    self->array = realloc(self->array, self->size); \
  } \
 \
  self->array[self->nextIndex++] = elem; \
} \
 \
struct D##T##Array createD##T##Array(int initialSize) { \
  struct D##T##Array darray; \
  darray.size = initialSize; \
  darray.nextIndex = 0; \
  darray.array = malloc(initialSize * sizeof(T)); \
  darray.push = &_push##T; \
  return darray; \
}

deriveDArray(int)
deriveDArray(PrimeFactor)
