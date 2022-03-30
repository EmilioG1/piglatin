// Test: "If a word starts with qu it should move q and u to the end of a word."
// code: pigLatin("quick");
// Expected Output: ("ickqu")

function pigLatin(element) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (index = 0; index < vowel.length; index++) {
    if (element[0] === vowel[index]) {
      return element + "way";
    } else if (element[0] === "q" && element[1] === "u") {
      return element.slice(2, element.length) + "qu";
    }
  }
  return false;
} 

console.log(pigLatin("quilt"));