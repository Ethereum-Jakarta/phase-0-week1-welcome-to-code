// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord=word4.substring(4, 13)
let thirdWord=word4.substring(15, 17)
let fourthWord=word4.substring(18, 20)
let fifthword =word4.substring(21, 25)

let firstWordLength = exampleFirstWord4.length;
let second=secondWord.length;
let third =thirdWord.length;
let fourth =fourthWord.length;
let fifth = fifthword.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('First second: ' + secondWord + ', with length: ' + second);
console.log('First third: ' + thirdWord + ', with length: ' + third);
console.log('First fourth: ' + fourthWord + ', with length: ' + fourth);
console.log('First fifth: ' + fifthword + ', with length: ' + fifth);

