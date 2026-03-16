// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let SecondWord4 = word4.substring(4, 14);
let SecondWordLength = SecondWord4.length;

let ThirdWord4 = word4.substring(15, 17);
let ThirdWordLength = ThirdWord4.length;

let FourthWord4 = word4.substring(18, 20);
let FourthWordLength = FourthWord4.length;

let FifthWord4 = word4.substring(21, 25);
let FifthWordLength = FifthWord4.length;

console.log('Second Word: ' + SecondWord4 + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + ThirdWord4 + ', with length: ' + ThirdWordLength);
console.log('Fourth Word: ' + FourthWord4 + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + FifthWord4 + ', with length: ' + FifthWordLength);
