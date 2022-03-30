// Test: "If a word begins with multiple consonants move them to the back of the word and concat "ay" to the end"
// code: pigLatin("checkers")
// expected output: "eckerschay"

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < element.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "quay";
    } else if (vowel.includes(element[index])) {
      return element.slice(index, element.length) + element.slice(0, index) + "ay";
    }
  }
  return false;
} 

let string = "checkers";
console.log(string[2]);
$(document).ready(function(){
  console.log(pigLatin("squeal"));
});


