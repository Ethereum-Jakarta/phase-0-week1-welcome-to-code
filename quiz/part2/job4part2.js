//soal 4
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';


let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);


let secondword = word4.substring(4,14);
let secondwordlength = secondword.length;
console.log('Second Word: ' + secondword + ', with length:' + secondwordlength)


let thirdword = word4.substring(15,17);
let thirdwordlength = thirdword.length;
console.log('Third Word: ' + thirdword +', with  length:' + thirdwordlength)


let fourthword = word4.substring(18,20);
let fourthwordlength = fourthword.length;
console.log('Fourth Word: ' + fourthword +', with length:' + fourthwordlength)

let fifthword = word4.substring(21,25);
let fifthwordlength = fifthword.length;
console.log('Fifth Word:' + fifthword +', with length:' + fifthwordlength)

//Done