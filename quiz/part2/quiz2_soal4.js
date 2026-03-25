// SOAL 4: Breaking Sentence (yet Again) and Count Each Length

/* 

Problem :
Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

*/

let sentenceAgain2 = 'wow JavaScript is so cool';
let exampleFirstWordAgain2 = sentenceAgain2.substring(0, 3);
let firstWordLength = exampleFirstWordAgain2.length;
let secondWordAgain2 = sentenceAgain2.substring(4, 14);
let secondWordLength = secondWordAgain2.length;
let thirdWordAgain2 = sentenceAgain2.substring(15, 17);
let thirdWordLength = thirdWordAgain2.length;
let fourthWordAgain2 = sentenceAgain2.substring(18, 20);
let fourthWordLength = fourthWordAgain2.length;
let fifthWordAgain2 = sentenceAgain2.substring(21, 25);
let fifthWordLength = fifthWordAgain2.length;

console.log('First Word (Again): ' + exampleFirstWordAgain2 + ', with length: ' + firstWordLength);
console.log('Second Word (Again): ' + secondWordAgain2 + ', with length: ' + secondWordLength);
console.log('Third Word (Again): ' + thirdWordAgain2 + ', with length: ' + thirdWordLength);
console.log('Fourth Word (Again): ' + fourthWordAgain2 + ', with length: ' + fourthWordLength);
console.log('Fifth Word (Again): ' + fifthWordAgain2 + ', with length: ' + fifthWordLength);