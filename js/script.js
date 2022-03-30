// Test: "It should identify if q and u are in a word."
// code: pigLatin("squeal");
// Expected Output: true

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u" || element.includes("qu")) {
      return true;
    }
  }
  return false;
} 

console.log(pigLatin("squit"));