// Test: "It should identify if a word begins with a consonant."
// code: pigLatin("goat");
// Expected Output: true

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "quay";
    } else {
      return true;
    }
  }
  return false;
} 

console.log(pigLatin("crab"));