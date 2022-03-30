// Test: "it should handle multiple words in string for all cases"
// code: pigLatin("are you cooking quail if so we squeal")
// expected output:"areway ouyay ookingcay ailquay ifway osay eway quealsay"
function pigLatin(text) {
  const words = text.trim().split(" ");
  let latin = [];
  words.forEach(function(element) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const vowelQ = ['a', 'e', 'i', 'o', 'u', 'q'];
    for (index = 0; index < vowel.length; index++) {
      if (vowel.includes(element[0])) {
        return latin.push(element + "way");
      } else if (element[0] === "q" && element[1] === "u") {
        return latin.push(element.slice(2, element.length) + "quay");
      } else if (vowelQ.includes(element[index])) {
        return latin.push(element.slice(index, element.length) + element.slice(0, index) + "ay");
      } 
    } 
   });
  return latin.join(" ");
}

$(document).ready(function(){
  console.log(pigLatin("are you cooking quail if so we squeal"));

});
