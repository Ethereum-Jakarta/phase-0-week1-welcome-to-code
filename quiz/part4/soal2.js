/*
tujuan:mengembalikan nilai dari perkalian 2 buah parameter
input:2*2;
output:4
langkah-langkah:
1.kita buat fungsinya terlebih dahulu,dan menambahkan 2 parameter
2.setelah itu kita kembalikan perkalian dari 2 parameter tersebut
3.selanjutnya,kita buat 2 buah variable lagi untuk menyimpan angka yang mau di kalikan
4.buat 1 variable untuk menyimpan perkalian antara 2 parameter tersebut
5.kita panggil variable yang menyimpan perkalian 2 parameter tersebut
6.selesai
*/
function calculateMultiply(num1, num2){
    return num1*num2;
}
let num1=1;
let num2=2;
const total=calculateMultiply(num1, num2);
console.log(total);