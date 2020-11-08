const array = require('../utilities/array');

const dividers = array.filledArray(20, 2);
let candidate = 2520;
while (!dividers.every(divider => candidate % divider === 0))
  candidate += 1;

console.log(candidate);
