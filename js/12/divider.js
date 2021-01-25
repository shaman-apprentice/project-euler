module.exports = {
  getDividerCount: (getPrimeFactorization, n) => {
    if (n === 1)
      return 1

    const primeFactorization = getPrimeFactorization(n)
  
    const differentPrimePermutations = primeFactorization.reduce((acc, pf) => {
      return acc * (pf.exponent + 1)
    }, 1)
    
    return differentPrimePermutations
  } 
}
