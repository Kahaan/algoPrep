// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

}

function strMap(str){
  hsh = {}
  str = str.replace(/[^\w]/g, "").toLowerCase()
  str.split("").forEach((el) => {
    // console.log(el)
    if (hsh[el]){
      hsh[el] += 1
    } else {
      hsh[el] = 1
    }
  })
  return hsh
}


module.exports = anagrams;
