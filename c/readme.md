[MinGW](http://www.mingw.org/wiki/Getting_Started) for gcc compiler on Windows. Basic usage:
```cmd
gcc c/xx/main.c -o c/xx/main
c\xx\main.exe
```

### How to compile own utility library
[Basic tutorial](https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_C_libraries.html)
```cmd
# compile static library
gcc -o c/utilities/dArray.o -c c/utilities/dArray.c
gcc -o c/utilities/prime.o -c c/utilities/prime.c

# link static library
gcc c/03/main.c -o c/03/main c/utilities/prime.o c/utilities/dArray.o

# compile and run
gcc c/03/main.c -o c/03/main c/utilities/dArray.o c/utilities/prime.o && c\03\main.exe
```

### See output of preprocessor
```cmd
gcc -E c/utilities/dArray.c
```
