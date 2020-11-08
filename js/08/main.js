const fs = require('fs');
const { EOL } = require('os');
const array = require('../utilities/array');

const numberStr = fs.readFileSync('files/08.txt', 'utf8').split(EOL).join('');
const digitSize = 13;
const products = array.filledArray(numberStr.length - 1, digitSize)
  .map(i => numberStr.slice(i - digitSize, i))
  .map(s => s.split('').reduce((acc, c) => acc * parseInt(c), 1));

console.log(Math.max(...products));
