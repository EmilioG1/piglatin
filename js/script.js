// Test: "It should identify 'a','e','i','o','u'"
// Code: pigLatin("e");
// Expected Output: true

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element === vowel[index]) {
      return true;
    }
  }
  return false;
} 

console.log(pigLatin("!"));