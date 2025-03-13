//Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let eFirstWord4 = word4.substring(0, 3);
let eSecondWord4 = word4.substring(4, 14)
let eThirdWord4 = word4.substring(15, 17)
let eFourthWord4 = word4.substring(18, 20)
let eFifthWord4 = word4.substring(21, 25)

let firstWordLength = eFirstWord4.length;
let secondWordLength = eSecondWord4.length;
let thirdWordLength = eThirdWord4.length;
let fourthWordLength = eFourthWord4.length;
let fifthWordLength = eFifthWord4.length;

console.log('First Word: ' + eFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + eSecondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + eThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + eFourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + eFifthWord4 + ', with length: ' + fifthWordLength);

