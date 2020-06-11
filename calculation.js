
function strictEqual(numsArray) {
  let num1 = numsArray[0]
  let num2 = numsArray[1]

  return Object.is(num1, num2)
}

module.exports = strictEqual
