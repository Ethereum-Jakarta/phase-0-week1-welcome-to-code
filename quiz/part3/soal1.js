/*
tujuan:membuat perulangan hitung maju dan hitung mundur
input:1-10,10-1
output:1,2,3,4,5,6,7,8,9,10 || 10,9,8,7,6,5,4,3,2,1
langkah-langkah:
1.kita siapkan variable untuk menyimpan mulai dari angka berapa,misal 1
2.kita lakukan looping untuk menghitung angka maju nya,disini kita gunakan looping while
3.setelah kita buat angka maju,kita buat yang angka mundur
4.kita siapkan variable untuk menyimpan mulai dari angka berapa,ini kebalikannya dari angka maju misal 10
5.kita lakukan yang sama juga seperti perulangan maju,menggunakan while juga
6.selesai
*/


let hitungMaju=1;
while(hitungMaju <=10){
    console.log(`Hitungan Maju ke: ${hitungMaju}`);
    hitungMaju++;
}

let hitunganMundur=10;
while(hitunganMundur>=1){
    console.log(`Hitungan Mundur ke: ${hitunganMundur}`);
    hitunganMundur--;
}