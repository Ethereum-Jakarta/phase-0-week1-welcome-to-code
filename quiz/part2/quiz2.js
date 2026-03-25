// SOAL 1: Let's Form a Sentence!

/* 



Problem :
- Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol "+".
- Disediakan variable "word". 
- Tambahkan nilai pada variabel "word" satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. 
- Jangan lupa menambahkan spasi di setiap kata dan tampilkan di console hasil penggabungannya! 
- Kamu tidak perlu membuat variable baru!

*/

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

word = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;

console.log(word);

// SOAL 2: Index Accessing - 1 by 1

/* 

Problem :
- Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata di dalamnya.
- Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
- Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints :
Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

*/

let sentence = 'wow JavaScript is so cool';
let exampleFirstWord = sentence[0] + sentence[1] + sentence[2];
let secondWord = sentence[4] + sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] + sentence[10] + sentence[11] + sentence[12] + sentence[13];
let thirdWord = sentence[15] + sentence[16];
let fourthWord = sentence[18] + sentence[19];
let fifthWord = sentence[21] + sentence[22] + sentence[23] + sentence[24];

console.log('Example First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord);

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