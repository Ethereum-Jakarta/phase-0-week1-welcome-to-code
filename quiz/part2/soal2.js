//soal1
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

console.log();

// Soal 2. Index Accessing - 1 by 
let word1 = 'wow JavaScript is so cool';
let exampleFirstWord = word1[0] + word1[1] + word1[2];
let kedua = word1[4] + word1[5] + word1[6] + word1[7] + word1[8] + word1[9] + word1[10] + word1[11] + word1[12] + word1[13];
let ketiga = word1[15] + word1[16];
let keempat = word1[18] + word1[19];
let kelima = word1[21] + word1[22] + word1[23] + word1[24];

console.log('First Word: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas
console.log('Second Word: ' + kedua);
console.log('Third Word: ' + ketiga);
console.log('Fourth Word: ' + keempat);
console.log('Fifth Word: ' + kelima);

console.log();

//Soal 3. Breaking Sentence (Again) using Substring

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let kedua1 = word3.substring(4, 14);
let ketiga1 = word3.substring(15, 17);
let keempat1 = word3.substring(18, 20);
let kelima1 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + kedua1);
console.log('Third Word: ' + ketiga1);
console.log('Fourth Word: ' + keempat1);
console.log('Fifth Word: ' + kelima1);

console.log();

// Soal 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';

let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let kedua2 = word3.substring(4, 14);
let secondWordLength = kedua2.length;

let ketiga2 = word3.substring(15, 17);
let thirdWordLength = ketiga2.length;

let keempat2 = word3.substring(18, 20);
let fourthWordLength = keempat2.length;

let kelima2 = word3.substring(21, 25);
let fifthWordLength = kelima2.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + kedua2 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + ketiga2 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + keempat2 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + kelima2+ ', with length: ' + fifthWordLength);

console.log();

//