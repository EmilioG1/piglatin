rules of piglatin
Rule 1: Words beginning with a vowel, add "way" to the end. vowels A E I O U

Rule 2: words beginning with consonants move all of the first consecutive consonants to the end then add ay to the end.

Rule 3: if the first consonant include qu move the q and the u to the end and add ay. ie quick becomes ickquay and squeal becomes quealsay


Describe: pigLatin();
Test: "should return an empty string"
code: pigLatin("");
Expected Output:""

Test: "Should identify a vowel"
Code: pigLatin("a");
Expected Output: true

Test: "It should identify 'a','e','i','o','u'"
Code: pigLatin("e");
Expected Output: true

Test: "It should identify if its not 'a','e','i','o','u'"
code: pigLatin("d");
Expected Output: false

Test: "it should identify if the first letter of a word is a vowel"
code: pigLatin("ant");
Expect Output: true

Test: "it should identify if the first letter of a word is a vowel if so concat way to the end of the word"
code: pigLatin("ant");
Expect Output: antway

Test: "It should identify if the first letter of a word is a qu"
code: pigLatin("queen");
expected Output: true

Test: "It should identify if q and u are in a word."
code: pigLatin("squeal");
Expected Output: true

Test: "It should move q and u to the end of a word."
code: pigLatin("quick");
Expected Output: ("ickqu")

Test: "It should add ay to the end of a word."
code: pigLatin("quick");
Expected Output: ("ickquay")

Test: "It should identify if a word begins with a consonant."
code: pigLatin("goat");
Expected Output: true

Test: "if a word begins with a consonant, move it to the back of the word"
code pigLatin("checkers")
Expected Output: "heckers"

Test: "If a word begins with multiple consonants move them to the back fo the word"
code: pigLatin("checkers")
expected output: "eckersch"

Test: "If a word begins with multiple consonants move them to the back fo the word and concat "ay" to the end"
code: pigLatin("checkers")
expected output: "eckerschay"

Test: "if a word begins with consonants, and qu is in the consecutive consonants, don't move the q with the consonants."
code: pigLatin("squeal");
expected output: "quealsay"

Test: "it should handle multiple words in string for all cases"
code: pigLatin("are you cooking quail if so we squeal")
expected output:"areway ouyay ookingcay ailquay ifay osay eway quealsay"

Describe pigLatinUtility();

Test: It should filter out punctuation
code: pigLatinUtility("hello.");
Expected Output: "ellohay"

Test: It should be case insensitive
code: pigLatinUtility("Hello.");
Expected Output: "ellohay"

Test: It should ignore numbers
code: pigLatinUtility("hello 17 what")
Expected Output: "ellohay 17 atwhay"