/*
tujuan:kita di suruh untuk tampilkan panjang dari masing masing kata
input:"wow"
output:3
langkah-langkah:
1.kita buat 1 variable untuk menyimpan kalimat semuanya
2.kita buat 1 variable lagi untuk memisahkan masing masing kata menggunakan substring
3.kita hitung panjang kata menggunakan .length
4.kita buat ebberapa variable untuk menampung masig masing katanya
5.kita panggil masing masing variable nya
6.selesai
*/

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
let secondtWord4 = word4.substring(4, 14);
let secondWordLength = secondtWord4.length;
let threeWord4 = word4.substring(15, 17);
let threeWordLength = threeWord4.length;
let fourthWord4 = word4.substring(18, 20);
let fourthWordLength = fourthWord4.length;
let fiveWord4 = word4.substring(21, 25);
let fiveWordLength = fiveWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('second Word: ' + secondtWord4 + ', with length: ' + secondWordLength);
console.log('three Word: ' + threeWord4 + ', with length: ' + threeWordLength);
console.log('Four Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Five Word: ' + fiveWord4 + ', with length: ' + fiveWordLength);