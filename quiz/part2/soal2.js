/*
tujuan:kita harus memecah sebuah kalimat menjadi masing masing hurufnya
input:"wow"
output:"w" "o" "w"
langkah-langkah:
1.kita siapkan variable untuk menyimpan input kalimatnya
2.kita siapkan variable lagi untuk memecah kalimat dan mengambil setiap hurufnya
3.kita lakukan secara manual dulu
4.selesai
*/

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let wordKedua=word[4] + word[5] + word[6] + word[7] + word [8] + word[9] + word[10] + word[11] + word[12] + word[13];
let wordKetiga=word[15] + word[16];
let wordKeempat=word[18] + word[19];
let wordKelima=word[21] + word[22] +word[23] + word[24];
let gabungan=exampleFirstWord + " "+ wordKedua + " " + wordKetiga + " " + wordKeempat + " " + wordKelima;

console.log('First Word: ' + exampleFirstWord);
console.log(`word kedua : ${wordKedua}`);
console.log(`word ketiga: ${wordKetiga}`);
console.log(`word keempat: ${wordKeempat}`);
console.log(`word kelima: ${wordKelima}`);
console.log(gabungan);