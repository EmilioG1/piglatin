// Test: "if a word begins with consonants, and qu is in the consecutive consonants, don't move the q with the consonants."
// code: pigLatin("squeal");
// expected output: "quealsay"

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const vowelQ = ['a', 'e', 'i', 'o', 'u', 'q'];
  for (index = 0; index < element.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "quay";
    } else if (vowelQ.includes(element[index])) {
      return element.slice(index, element.length) + element.slice(0, index) + "ay";
    }
  }
  return false;
} 

$(document).ready(function(){
  console.log(pigLatin("quick"));
});


