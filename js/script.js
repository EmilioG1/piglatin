// Test: "it should identify if the first letter of a word is a vowel"
// code: pigLatin("ant");
// Expected Output: true

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[0]) {
      return true;
    }
  }
  return false;
} 

console.log(pigLatin("ant"));