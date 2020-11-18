https://www.programiz.com/c-programming/c-pointers

- `&var`: Memory address where `var` is stored
- `int* p`: Declaration of int-pointer (same as `int *p`, `int * p`)

```C
int* pn;
int n;
n = 5;
pn = &n;
printf("%d", *pn);   // Output: 5, note that `*` here is the _dereference operator_
```

```C ints are mutable
int* pc
int c;
c = 5;
pc = &c;
c = 1; // changes value in address and doesn't reassign
printf("%d %d", c, *pc); // Output: 1 1
```

```C which makes sense, because you can change the value in the memory address by the pointer
int* pc
int c;
c = 5;
pc = &c;
*pc = 1;
printf("%d %d", *pc, c); // Output: 1 1
```

- arrays / pointers:
  - `&x[i]` is same as `x + i`
  - `x[i]` is same as `*(x + i)`
- dynamic memory allocation:
  - `ptr = (int*) malloc(100 * sizeof(int)); // ptr := NULL or fist memory address`
  - `free(ptr)`
  - `realloc(ptr, newSize)`
- strings
  - `char c[] = "abc"` results in _a|b|c|\0_ ⚠ `strlen(c) == 4`
  - `c = "def"` Syntax error (arrays and str are snd-class citizens) -> use `char* strcpy(char* destination, const char* source)` from _string.h_
- structs:
  - ```C
      struct Person {
        int age;
        float weight;
      };
    ```
    `struct person *personPt`: `(*personPtr).age` is same as `personPtr->age`
  - ⚠ structs are passed by value and not reference per default