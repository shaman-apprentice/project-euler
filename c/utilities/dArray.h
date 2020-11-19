#ifndef _DINTARRAY_H_

#define _DINTARRAY_H_

#define createDArrayGenerics(T) \
struct DArray##T { \
  T* array; \
  int size; \
  int nextIndex; \
  void (*push)(struct DArray##T * self, T elem); \
}; \
struct DArray##T createDArray##T(int initialSize);

createDArrayGenerics(int)

#endif
