// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.substring(0, 3);
let word2 =  word.substring(4, 14);
let word3 =  word.substring(15, 17);
let word4 =  word.substring(18, 20);
let word5 =  word.substring(21, 25);

let firstWordLength = exampleFirstWord.length;
let word2Length = word2.length;
let word3Length = word3.length;
let word4Length = word4.length;
let word5Length = word5.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength) ;
console.log(' second Word: ' + word2 + ', with length: ' +  word2Length);
console.log(' third Word: ' + word3 + ', with length: ' + word3Length);
console.log(' fourth Word: ' + word4 + ', with length: ' + word4Length);
console.log(' fifth Word: ' + word5 + ', with length: ' + word5Length);