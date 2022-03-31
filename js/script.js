const vowels = ['a', 'e', 'i', 'o', 'u'];
const vowelQ = ['a', 'e', 'i', 'o', 'u', 'q'];

function pigLatinVowels(words) {
  for (let i = 0; i < vowels.length; i++){
    if (words[0].toLowerCase() === vowels[i]){
      return words;
    } 
  } return false;
}

pigLatinVowels("d");

function pigLatinQu(words) {
  if(words.slice(0,2).toLowerCase() === "qu") {
    let wordStart = words.slice(0,2);
    let wordEnd = words.slice(2);
    return wordEnd.concat(wordStart);
  } else {
    return false;
  }
}

function pigLatinConsonants(words) {
  let wordEnd;
  let wordStart;
  for (let i = 0; i < vowelQ.length; i++){
    wordStart = words.slice(0, i);
    wordEnd = words.slice(i);
    if (vowelQ.includes(words[i])) {
      return wordEnd.concat(wordStart)
    }
  }
}

function pigLatinNumber(words) {
  if(Number(words)) {
    return words;
  }
}

function pigLatin(text) {
  let result = [];
  let words = text.split(" ");
  // let punc = ["!","?",",",".","@","#","$",";","/",":"]
  // let wordsNoPunc = words.map(function(element) {
  //   while (element.includes(
  // });


  words.forEach(function (word) {
    if(pigLatinNumber(word)) {
      result.push(pigLatinNumber(word));
    } else if (pigLatinVowels(word)){
      result.push(pigLatinVowels(word)+"way");
    } else if (pigLatinQu(word)){
      result.push(pigLatinQu(word)+"ay");
    } else {
      result.push(pigLatinConsonants(word)+"ay");
    }

  });
  return result.join(" ");
}
 
console.log(pigLatin("squeal?!"));

/*
Test: "it should handle multiple words in string for all cases"
code: pigLatin("are you cooking quail if so we squeal")
expected output:"areway ouyay ookingcay ailquay ifway osay eway quealsay"

*/