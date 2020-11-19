#ifndef _DINTARRAY_H_

#define _DINTARRAY_H_

#include "./PrimeFactor.h"

#define createDArrayGenerics(T) \
struct D##T##Array { \
  T* array; \
  int size; \
  int nextIndex; \
  void (*push)(struct D##T##Array* self, T elem); \
}; \
struct D##T##Array createD##T##Array(int initialSize);

createDArrayGenerics(int)
createDArrayGenerics(PrimeFactor)

#endif
