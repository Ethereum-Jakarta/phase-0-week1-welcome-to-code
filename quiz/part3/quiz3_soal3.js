// SOAL 3: Angka Ganjil dan Genap

/*

Problem :
- Buatlah sebuah perulangan 1-100 dengan pertambahan counter sebanyak 1
- Di dalam perulangan, periksa setiap angka counter:
  - Apabila angka counter adalah angka genap, tuliskan GENAP
  - Apabila angka counter adalah angka ganjil, tuliskan GANJIL

Hint: 
Kamu akan menggunakan kondisional juga di kasus ini.

*/

for (let m = 1; m <= 100; m++) {
    if (m % 2 === 0) {
        console.log(m + ' = GENAP');
    } else {
        console.log(m + ' = GANJIL');
    }
}