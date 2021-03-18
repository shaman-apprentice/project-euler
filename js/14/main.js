/**
 * @param n: Integer
 */
function nextCollatzNumber(n) {
  if (!Number.isInteger(n))
    throw new Error(`nextCollatzNumber is only defined for integers, but ${n} is not an integer`)

  if (n % 2 === 0)
    return n / 2

  return 3 * n + 1
}

function lengthOfCollatzProblem(n) {
  let length = 1

  while (n !== 1) {
    n = nextCollatzNumber(n)
    length += 1
  }

  return length
}

let maxChainLength = 10
let startingNumberWithMaxChainLength = 13;
for (let i = 1; i <= Math.pow(10, 6); i++) {
  const lengthOfCollatzProblemOfI = lengthOfCollatzProblem(i);
  if (lengthOfCollatzProblemOfI > maxChainLength) {
    maxChainLength = lengthOfCollatzProblemOfI;
    startingNumberWithMaxChainLength = i;
  }
}

console.log(startingNumberWithMaxChainLength)

