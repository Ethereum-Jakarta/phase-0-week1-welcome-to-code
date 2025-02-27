// ## Soal 3. Angka Ganjil dan Genap
// // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:

// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let genap = "";
for (genap = 2; genap < 100; genap += 2) {
  console.log(`${genap} - GENAP`);
}

let ganjil = "";
for (ganjil = 1; ganjil < 100; ganjil += 2) {
  console.log(`${ganjil} - GANJIL`);
}