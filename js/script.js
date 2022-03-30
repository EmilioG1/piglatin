// Test: "if a word begins with a consonant, move it to the back of the word"
// code pigLatin("checkers")
// Expected Output: "heckers"

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "quay";
    } else {
      return element.slice(1, element.length) + element.slice(0, 1) + "ay";
    }
  }
  return false;
} 

$(document).ready(function(){
  console.log(pigLatin("hello"));
});
