const digit = require("./digit")

const sum = digit.split("\n").reduce((acc, line) => acc + parseInt(line), 0)
console.log(sum.toLocaleString('fullwide', {useGrouping:false}).slice(0, 10))