const getFibs = (untilFibBiggerThan) => {
  const fibs = [ 1, 2 ];
  let i = 1;
  while (fibs[i] < untilFibBiggerThan)
    fibs[++i] = fibs[i - 1] + fibs[i - 2];

  return fibs.slice(0, -1);
};

console.log(
  getFibs(4000000)
    .filter(n => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0)
);
