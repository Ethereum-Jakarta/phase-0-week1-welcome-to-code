// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleLastWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let lastWordLength = exampleLastWord4.length;

console.log(
    'First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength +"\n"+
    'Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength +"\n"+
    'Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength +"\n"+
    'Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength +"\n"+
    'Last Word: ' + exampleLastWord4 + ', with length: ' + lastWordLength 

);