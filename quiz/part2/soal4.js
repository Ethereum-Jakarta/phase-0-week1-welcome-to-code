let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let lengthFirstWOrd = exampleFirstWord3.length;
console.log(
  "First Word: " + exampleFirstWord3,
  "with length:",
  lengthFirstWOrd,
);

let jsWord = word3.substring(4, 14);
let jsWordLength = jsWord.length;
console.log("Sec Word:", jsWord, "with length:", jsWordLength);

let isWord = word3.substring(15, 17);
let isWordLength = isWord.length;
console.log("Third Word:", isWord, "with length:", isWordLength);

let soWord = word3.substring(18, 20);
let soWordLength = soWord.length;
console.log("Fourth Word:", soWord, "with length:", soWordLength);

let coolWord = word3.substring(21, 25);
let coolWordLength = coolWord.length;
console.log("Fifth Word:", coolWord, "with length:", coolWordLength);
