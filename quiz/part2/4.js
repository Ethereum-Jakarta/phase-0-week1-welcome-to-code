// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecWord = word4.substring(4, 14);
let exampleThirdWord = word4.substring(15, 17);
let exampleFourthWord = word4.substring(18,20);
let exampleFifthWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondLength = exampleSecWord.length;
let thirdLength = exampleThirdWord.length;
let fourthLength = exampleFourthWord.length;
let fifthLength = exampleFifthWord.length;

console.log('First Word: ' + exampleFirstWord4 + ", with length: " + firstWordLength);
console.log('Second Word: ' + exampleSecWord + ", with length: " + secondLength);
console.log('Third Word: ' + exampleThirdWord + ", with length: " + thirdLength);
console.log('Fourth Word: ' + exampleFourthWord + ", with length: " + fourthLength);
console.log('Fifth Word: ' + exampleFifthWord + ", with length: " + fifthLength);


