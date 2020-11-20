#include "stdlib.h"

#include "./dArray.h"
#include "./PrimeFactor.h"

#define deriveDArray(T) \
void _push##T(struct D##T##Array* self, T elem) { \
  if (self->length >= self->capacity) { \
    self->capacity *= 2; \
    self->array = realloc(self->array, self->capacity); \
  } \
 \
  self->array[self->length++] = elem; \
} \
 \
struct D##T##Array createD##T##Array(int initialCapacity) { \
  struct D##T##Array darray; \
  darray.capacity = initialCapacity; \
  darray.length = 0; \
  darray.array = malloc(initialCapacity * sizeof(T)); \
  darray.push = &_push##T; \
  return darray; \
}

deriveDArray(int)
deriveDArray(PrimeFactor)
