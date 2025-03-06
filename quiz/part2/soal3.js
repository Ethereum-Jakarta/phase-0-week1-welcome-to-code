// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secword = word3.substring(4, 14);
let thrword = word3.substring(15, 17);
let forword = word3.substring(18, 20);
let fiveword = word3.substring(21, 25);

console.log('The Word Is: ' + exampleFirstWord3 +" "+ secword +" "+ thrword +" "+ forword +" "+ fiveword);