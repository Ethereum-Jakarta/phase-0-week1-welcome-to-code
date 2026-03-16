//Soal 3. Breaking Sentence (Again) using Substring

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let eFirstWord3 = word3.substring(0, 3);
let eSecondWord3 = word3.substring(4, 14)
let eThirdWord3 = word3.substring(15, 17)
let eFourthWord3 = word3.substring(18, 20)
let eFifthWord3 = word3.substring(21, 25)

console.log('First Word: ' + eFirstWord3);
console.log('Second Word: ' + eSecondWord3);
console.log('Third Word: ' + eThirdWord3);
console.log('Fourth Word: ' + eFourthWord3);
console.log('Fifth Word: ' + eFifthWord3);