// # Belajar Looping | Part 3
// ## Soal 1

// js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// let countMaju = 0;
// let countMundur = 5;

// console.log("LOOPING PERTAMA");
// while (countMaju <= 5) {
//   console.log(countMaju);
//   countMaju++;
// }

// console.log("LOOPING KEDUA");
// while (countMundur >= 0) {
//   console.log(countMundur);
//   countMundur--;
// }

// ## Soal 2. Melakukan Looping Menggunakan For
// js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// let count = 5;
// console.log("LOOPING PERTAMA");
// for (let i = 0; i <= count; i++) {
//   console.log(i);
// }

// console.log("LOOPING KEDUA");
// for (let i = count; i >= 0; i--) {
//   console.log(i);
// }

// ## Soal 3. Angka Ganjil dan Genap
// js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// let num = 1;
// while (num <= 100) {
//   console.log(`Num ${num} = `, num % 2 == 0 ? "GENAP" : "GANJIL");
//   num++;
// }

// ## Soal 4. counter kelipatan
// js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//Pertambahan 2, kelipatan 3 ---
// let counter2 = 1;
// console.log("Kelipatan 3");
// while (counter2 <= 100) {
//   if (counter2 % 3 === 0) {
//     console.log(`${counter2} kelipatan 3`);
//   }
//   counter2 += 2;
// }

// //Pertambahan 5, kelipatan 6 ---
// console.log("Kelipatan 6");
// for (let counter5 = 1; counter5 <= 100; counter5 += 5) {
//   if (counter5 % 6 === 0) {
//     console.log(`${counter5} kelipatan 6`);
//   }
// }

// //Pertambahan 9, kelipatan 10 ---
// let counter9 = 1;
// console.log("Kelipatan 10");
// while (counter9 <= 100) {
//   if (counter9 % 10 === 0) {
//     console.log(`${counter9} kelipatan 10`);
//   }
//   counter9 += 9;
// }

// ## Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

let asteriks = "";
for (let i = 1; i <= input; i++) {
  asteriks += "*";
  console.log(asteriks);
}

// ---
// Tips pengerjaan ada di video berikut :
// [Looping](https://youtu.be/kyobpgoqx2c)

// [Materi Looping](../../study-materials/part5.md)
