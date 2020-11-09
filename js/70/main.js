const array = require('../utilities/array');

const isRelativePrime = (m, n) => {
  if (m === 1)
    return true;

  for (let i = 2; i <= Math.min(m, n); i++)
    if (m % i === 0 && n % i === 0)
      return false;

  return true;
}

const phi = (n) => 
  array.filledArray(n - 1).filter(m => isRelativePrime(m, n)).length;

const getMutations = (s) => {
  if (s.length <= 1)
    return [ s ];

  const indexes = array.filledArray(s.length - 1, 0);
  return indexes.reduce((acc, i) => {
    const fstChar = s[i];
    const restStr = s.slice(0, i) + s.slice(i + 1)
    const mutationsWithFstChar = getMutations(restStr)
      .map(mutation => fstChar + mutation);
    acc.push(...mutationsWithFstChar);
    return acc;
  }, []);
}

const isMutation = (s, t) => 
  getMutations(s).includes(t)

console.time('calc phi');
console.log(phi(87109));  // 79180
// console.log(phi(10**7 - 1)); 
console.timeEnd('calc phi');

module.exports = {
  isRelativePrime,
  phi,
  getMutations,
  isMutation,
}
