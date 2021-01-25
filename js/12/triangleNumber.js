module.exports = {
  generateTriangleNumbers: function* () {
    let i = 1
    let value = i
    while (true) {
      yield value
      value += ++i
    }
  }
}
