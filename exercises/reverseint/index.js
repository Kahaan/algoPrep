// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Remove 0's from end
// move -ive to front
// reverse

function reverseInt(n) {
  if (n === 0) return 0
  arr = n.toString().split("").reverse()
  while(arr[0] === '0'){
    arr.shift()
  }

  if (n > 0) {
    return parseInt(arr.join(""))
  } else {
    arr.pop()
    arr.unshift('-')
    return parseInt(arr.join(""))

  }
}

module.exports = reverseInt;
