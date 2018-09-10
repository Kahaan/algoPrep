// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
  hsh = {}
  for (let el of str){
    hsh[el] = hsh[el] + 1 || 1
  }

  maxVal = 0
  maxChar = ''

  for(let ch in hsh){
    if (maxVal < hsh[ch]){
      maxVal = hsh[ch]
      maxChar = ch
    }
  }

  return maxChar
}


module.exports = maxChar;
