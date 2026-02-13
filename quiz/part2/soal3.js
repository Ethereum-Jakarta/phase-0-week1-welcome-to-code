// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let words = 'wow JavaScript is so cool';
let exampleFirstWords = words.substring(0, 3);

console.log('First Word: ' + exampleFirstWords);

let word2 = words.substring(4, 14);
let word3 = words.substring(15, 17);
let word4 = words.substring(18, 20);
let word5 = words.substring(21, 25);

console.log("Second Word: " + word2);
console.log("Third Word: " + word3);
console.log("Fourth Word: " + word4);
console.log("Fifth Word: " + word5);