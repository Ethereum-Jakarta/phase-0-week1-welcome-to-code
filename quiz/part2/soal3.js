/*
tujuan:kita ambil potongan dari 1 kalimat menggunakan substring
input:"wow javascript is so cool"
ouput:"wow"
langkah-langkah:
1.kita siapkan 1 variable untuk menyimpan 1 kalimatnya
2.kita siapkan 1 lagi variable untuk menyimpan potongan kata nya
3.disini kita gunakan substring untuk mengambil potongannya
4.selesai
*/
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secondWord3=word3.substring(4,14);
let thirdWord3=word3.substring(15, 17);
let fourthWord3=word3.substring(18,20);
let fiveWord3=word3.substring(21,25);

console.log('First Word: ' + exampleFirstWord3);
console.log(`Second Word: ${secondWord3}`);
console.log(`Third Word: ${thirdWord3}`);
console.log(`Fourth Word: ${fourthWord3}`);
console.log(`Five Word: ${fiveWord3}`);