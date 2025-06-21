/*
tujuan:kita disuruh menggabungkan beberapa variable menjadi satu kata
input:"javascript","is","awesome","and","i","love","it!"
output:"javascript is awesome and i love it!"
langkah-langkah:
1.kita siapkan varible untuk menyimpan input masing masing kata
2.kita gunakan 1 variable untuk menggabungkan semua variablenya,kita tidak perlu membuat variable baru
3.kita gabungkan menggunakan + dan kita tambahkan spasi juga untuk jarak tiap katanya
4.selesai
*/

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

word=word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;
console.log(word);