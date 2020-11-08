const array = require('../utilities/array');

const sumOfSquares = array.filledArray(100).reduce((acc, n) => acc + n * n, 0);
const squareOfSums = Math.pow(100 * 101 / 2, 2);
console.log(squareOfSums - sumOfSquares);
