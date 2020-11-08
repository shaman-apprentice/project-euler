/** start and end is inclusive */
const filledArray = (end = 100, start = 0, ) => {
  const result = new Array(end - start + 1);
  for (let i = 0; start + i <= end; i++)
    result[i] = start + i;

  return result;
}

module.exports = {
  filledArray,
}
