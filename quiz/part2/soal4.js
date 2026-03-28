// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

/*
/////////////////////////////////////////
            ASSIGN NILAI VARIABEL
///////////////////////////////////////
*/

let word4 = 'wow JavaScript is so cool';

let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let secondWord = word4.substring(4, 14);
let secondWordLength = secondWord.length;

let thirdWord = word4.substring(16, 20);
let thirdWordLength = thirdWord.length;

let fourthWord = word4.substring(21, 23);
let fourthWordLength = fourthWord.length;

let fifthWord = word4.substring(24, 27);
let fifthWordLength = fifthWord.length;


/*
/////////////////////////////////////////
            CONSOLE OR LOG              
///////////////////////////////////////
*/

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);