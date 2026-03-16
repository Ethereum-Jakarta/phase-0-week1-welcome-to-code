// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecword4 = word4.substring(4, 14);
let examplethrword4 = word4.substring(15, 17);
let exampleforword4 = word4.substring(18, 20);
let examplefiveword4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secWordLength = exampleSecword4.length;
let thrWordLength = examplethrword4.length;
let forWordLength = exampleforword4.length;
let fiveWordLength = examplefiveword4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('First Word: ' + exampleSecword4 + ', with length: ' + secWordLength);
console.log('First Word: ' + examplethrword4 + ', with length: ' + thrWordLength);
console.log('First Word: ' + exampleforword4 + ', with length: ' + forWordLength);
console.log('First Word: ' + examplefiveword4 + ', with length: ' + fiveWordLength);