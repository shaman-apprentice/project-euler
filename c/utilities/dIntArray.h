#ifndef _DINTARRAY_H_

#define _DINTARRAY_H_

struct DIntArray {
  int* array;
  int size;
  int nextIndex;
  void (*push)(struct DIntArray* self, int elem);
};
struct DIntArray createDIntArray(int initialSize);

#endif
