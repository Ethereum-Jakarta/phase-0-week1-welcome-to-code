// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let words = 'wow JavaScript is so cool';
let exampleFirstWords = words.substring(0, 3);

let firstWordLength = exampleFirstWords.length;

console.log('First Word: ' + exampleFirstWords + ', with length: ' + firstWordLength);

let word2 = words.substring(4, 14);
let word3 = words.substring(15, 17);
let word4 = words.substring(18, 20);
let word5 = words.substring(21, 25);

console.log("Second Word: " + word2 + ", with length: " + word2.length);
console.log("Third Word: " + word3 + ", with length: " + word3.length);
console.log("Fourth Word: " + word4 + ", with length: " + word4.length);
console.log("Fifth Word: " + word5 + ", with length: " + word5.length);