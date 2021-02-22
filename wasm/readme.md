without `-s EXIT_RUNTIME=1` process is not ended -> streams like printf not flushed
`emcc c/01/main.c -s EXIT_RUNTIME=1 -o wasm/01/main.js` 

`emcc c/08/main.c -o main.js --embed-file files/08.txt -s EXIT_RUNTIME=1`

`emcc c/70/main.c -o wasm/70/main.js c/70/utilities.c c/utilities/prime.c c/utilities/dArray.c -s EXIT_RUNTIME=1 -s INITIAL_MEMORY=1073741824`