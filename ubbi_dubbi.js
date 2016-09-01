var vowels = ["a", "e", "i", "o", "u"]
function translate (word) {
  var firstVowel = true
  return word.split("").map( (letter, i) => {
    if(vowels.includes(letter) && firstVowel) {
      firstVowel = false
      return "ub" + letter
    } else {
      firstVowel = true
      return letter
    }
  }).join("")
}


module.exports = {
  translate: translate
}
