// Test: "it should identify if the first letter of a word is a vowel if so concat way to the end of the word"
// code: pigLatin("ant");
// Expect Output: antway

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    }
  }
  return false;
} 

console.log(pigLatin("time"));