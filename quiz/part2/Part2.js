// SOAL 1
/*
1. Let's Form a Sentence
Problem

Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
*/

// SOLUSI
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);

// SOAL 2
/*
Problem

Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints

Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
tersebut!
*/

// SOLUSI
const kata = "wow JavaScript is so cool";
const exampleFirstWord = kata[0] + kata[1] + kata[2];
const secondWord =
  kata[4] + kata[5] + kata[6] + kata[7] + kata[8] + kata[9] + kata[10] + kata[11] + kata[12] + kata[13];
const thirdWord = kata[15] + kata[16];
const fourthWord = kata[18] + kata[19];
const fifthWord = kata[21] + kata[22] + kata[23] + kata[24];

console.log("First Word: " + exampleFirstWord);
console.log(`Second Word : ${secondWord}`);
console.log(`Third Word : ${thirdWord}`);
console.log(`Fourth Word : ${fourthWord}`);
console.log(`Fifth Word : ${fifthWord}`);

// SOAL 3
/*
Problem

Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
*/

// SOLUSI
let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
const secondWord3 = word3.substring(4, 14);
const thirdWord3 = word3.substring(15, 17);
const fourthWord3 = word3.substring(18, 20);
const fifthWord3 = word3.substring(21, 25);

console.log("First Word 3 : " + exampleFirstWord3);
console.log(`Second Word 3 : ${secondWord3}`);
console.log(`Third Word 3 : ${thirdWord3}`);
console.log(`Fourth Word 3 : ${fourthWord3}`);
console.log(`Fifth Word 3 : ${fifthWord3}`);

// SOAL 4
/*
Problem

Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
*/

// SOLUSI
let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
const wordEmpat2 = word4.substring(4, 14);
const wordEmpat3 = word4.substring(15, 17);
const wordEmpat4 = word4.substring(18, 20);
const wordEmpat5 = word4.substring(21, 25);

console.log("First Word 4 : " + exampleFirstWord + ", with length: " + firstWordLength);
console.log(`Secord Word 4 : ${wordEmpat2}, With Length : ${wordEmpat2.length}`);
console.log(`Third Word 4 : ${wordEmpat3}, With Length : ${wordEmpat3.length}`);
console.log(`Fourth Word 4 : ${wordEmpat4}, With Length : ${wordEmpat4.length}`);
console.log(`Fifth Word 4 : ${wordEmpat5}, With Length : ${wordEmpat5.length}`);
