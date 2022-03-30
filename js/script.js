// Test: "It should add ay to the end of a word after moving qu to the end."
// code: pigLatin("quick");
// Expected Output: ("ickquay")

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "quay";
    }
  }
  return false;
} 

console.log(pigLatin("quick"));