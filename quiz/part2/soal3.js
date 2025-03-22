// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';

let firstWord = word3.substring(0, 3);
let secondWord = word3.substring(4, 14);
let thirdWord = word3.substring(15, 17);
let fourthWord = word3.substring(18, 20);
let fifthWord = word3.substring(21, 25);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

let fullWord = `${firstWord} ${secondWord} ${thirdWord} ${fourthWord} ${fifthWord}`;
console.log(`Full Word : ${fullWord}`);

