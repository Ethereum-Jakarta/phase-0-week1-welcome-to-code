/*
tujuan:kita membuat hitungan maju dan hitungan mundur menggunakan looping for
input:maju=1-10,mundur=10-1
output:1,2,3,4,5,6,7,8,9,10||10,9,8,7,6,5,4,3,2,1
langkah-langkah:
1.kita langsung buat 1 perulangan terlebih dahulu untuk hitungan maju
2.kita tidak perlu buat variable di luar perulangganya
3.kita langsung buat variable dalam perulanagannya yang dimulai dari angka 1
4.setelah itu kita bisa coba panggil variable yang ada didalam perulangan for tersebut
5.setelah selesai,kita lanjut membuat 1 perulangan lagi untuk yang hitungan mundur
6.cara nya masih sama seperti yang hitungan maju,tapi ini bedanya variable nya dimulai dari 10
7.kita coba panggil variable yang ada di dalam perulangan mundur tersebut
8.selesai
*/

for(let hitungMaju=1;hitungMaju <=10;hitungMaju++){
    console.log(`Hitungan yang ke: ${hitungMaju}`);
};
for(let hitungMundur=10;hitungMundur >=1;hitungMundur--){
    console.log(`Hitungan yang ke: ${hitungMundur}`);
};