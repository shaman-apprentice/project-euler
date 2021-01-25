const { generateTriangleNumbers } = require("./triangleNumber")
const { createGetPrimeFactorizationWithDynamicCachedPrimes } = require("../utilities/prime")
const { getDividerCount } = require("./divider")

const getPrimeFactorization = createGetPrimeFactorizationWithDynamicCachedPrimes()

for (const triangleNumber of generateTriangleNumbers())
  if (getDividerCount(getPrimeFactorization, triangleNumber) > 500) {
    console.log(triangleNumber)
    break
  }
