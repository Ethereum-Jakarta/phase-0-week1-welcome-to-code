// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let number = 100;
let type;

for (let index = 1; index <= number; index++) {
    type = index % 2 === 0 ? "GENAP" : "GANJIL";
    console.log(index + ", tipe: " + type);
}
