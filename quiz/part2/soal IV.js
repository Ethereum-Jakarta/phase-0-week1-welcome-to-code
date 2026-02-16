
 //Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;  
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('first word: ' + exampleFirstWord4 + ' with length: ' + firstWordLength);
console.log('second word: ' + exampleSecondWord4 + ' with length: ' + secondWordLength);
console.log('third word: ' + exampleThirdWord4 + ' with length: ' + thirdWordLength);
console.log('fourth word: ' + exampleFourthWord4 + ' with length: ' + fourthWordLength);
console.log('fifth word: ' + exampleFifthWord4 + ' with length: ' + fifthWordLength);
