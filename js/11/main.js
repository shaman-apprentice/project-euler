const { createInputGrid } = require("./inputGrid")

const inputGrid = createInputGrid()

function* leftToRightCandidates(inputGrid) {
  for (let i = 0; i < inputGrid.length; i++)
    for (let j = 3; j < inputGrid.length; j++) 
      yield inputGrid[i][j - 3] * inputGrid[i][j - 2] * inputGrid[i][j - 1] * inputGrid[i][j]
}

function* upToDownCandidates(inputGrid) {
  for (let i = 3; i < inputGrid.length; i++)
    for (let j = 0; j < inputGrid.length; j++)
      yield inputGrid[i - 3][j] * inputGrid[i - 2][j] * inputGrid[i - 1][j] * inputGrid[i][j]
}

function* diagonalLeftToRightCandidates(inputGrid) {
  for (let i = 3; i < inputGrid.length; i++)
    for (let j = 3; j < inputGrid.length; j++)
      yield inputGrid[i - 3][j - 3] * inputGrid[i - 2][j - 2] * inputGrid[i - 1][j - 1] * inputGrid[i][j]
}

function* diagonalRightToLeftCandidates(inputGrid) {
  for (let i = inputGrid.length - 4; i >= 0; i--)
    for (let j = 3; j < inputGrid.length; j++)
      yield inputGrid[i + 3][j - 3] * inputGrid[i + 2][j - 2] * inputGrid[i + 1][j - 1] * inputGrid[i][j]
}

function getMax(generator) {
  let max = generator.next().value
  for (const value of generator)
    max = Math.max(max, value)

  return max
}

const generators = [leftToRightCandidates, upToDownCandidates, diagonalLeftToRightCandidates, diagonalRightToLeftCandidates]
console.log(Math.max(...generators.map(generator => getMax(generator(inputGrid)))))
