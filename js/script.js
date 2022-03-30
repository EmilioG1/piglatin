// Test: "It should identify if the first letter of a word is a qu"
// code: pigLatin("queen");
// expected Output: true

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return true;
    }
  }
  return false;
} 

console.log(pigLatin("squid"));