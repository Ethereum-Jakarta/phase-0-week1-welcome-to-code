// SOAL 3: Breaking Sentence (Again) Using Substring

/*

Problem :
Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

*/

let sentenceAgain = 'wow JavaScript is so cool';
let exampleFirstWordAgain = sentenceAgain.substring(0, 3);
let secondWordAgain = sentenceAgain.substring(4, 14);
let thirdWordAgain = sentenceAgain.substring(15, 17);
let fourthWordAgain = sentenceAgain.substring(18, 20);
let fifthWordAgain = sentenceAgain.substring(21, 25);

console.log('First Word (Again): ' + exampleFirstWordAgain);
console.log('Second Word (Again): ' + secondWordAgain);
console.log('Third Word (Again): ' + thirdWordAgain);
console.log('Fourth Word (Again): ' + fourthWordAgain);
console.log('Fifth Word (Again): ' + fifthWordAgain);