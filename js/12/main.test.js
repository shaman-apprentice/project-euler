const { getPrimeFactorization } = require("../utilities/prime")
const { generateTriangleNumbers } = require("./triangleNumber")
const { getDividerCount } = require("./divider")

describe("generateTriangleNumbers", () => {
  test("first triangular number", () => {
    expect(generateTriangleNumbers().next().value).toBe(1)
  })

  test("7th triangular number", () => {
    let generator = generateTriangleNumbers()
    for (let i = 0; i < 6; i++)
      generator.next().value

    expect(generator.next().value).toBe(28)
  })
})

describe("getDividerCount", () => {
  let getPF = (n) => getPrimeFactorization([2, 3, 5, 7], n)

  test("the divider count of a prime is 2", () => {
    expect(getDividerCount(getPF, 5)).toBe(2)
  })
  
  test("the divider count of 28 is 6", () => {
    expect(getDividerCount(getPF, 28)).toBe(6)
  })

  test("the divider count of 30 is 6", () => {
    expect(getDividerCount(getPF, 30)).toBe(8)
  })
  
  test("the divider count of a number where a prime occurs multiple times", () => {
    expect(getDividerCount(getPF, 24)).toBe(8)
  })

  test("the devider count of 1 is 1", () => {
    expect(getDividerCount(getPF, 1)).toBe(1)
  })
})