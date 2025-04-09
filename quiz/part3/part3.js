// SOAL 1
/*
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
*/
let i = 1;
while (i <= 5) {
  console.log(`Looping While Pertama ${i}`);
  i++;
}

let j = 5;
while (j >= 1) {
  console.log(`Looping While Kedua ${j}`);
  j--;
}

// SOAL 2
/*
Problem

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
*/

// SOLUSI
for (let i = 1; i <= 5; i++) {
  console.log(`Looping For Pertama ${i}`);
}
for (let i = 5; i >= 1; i--) {
  console.log(`Looping For Kedua ${i}`);
}

// SOAL 3
/*
Hint: kamu akan menggunakan kondisional juga di kasus ini.

Problem

Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:

Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
*/

// SOLUSI
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} = Genap`);
  } else {
    console.log(`${i} = Ganjil`);
  }
}

// SOAL 4
/*
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:

Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5,
dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3"dan seterusnya.
*/

// SOLUSI
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`Angka ${i} kelipatan 3`);
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`Angka ${i} kelipatan 6`);
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`Angka ${i} kelipatan 10`);
  } else {
    console.log(i);
  }
}

// SOAL 5
/*
Problem
buatlah bintang seperti berikut
let input = 5
hasilnya
*
**
***
****
*****
*/

// SOLUSI
let input = 5;
let bintang = "";
for (let i = 1; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
