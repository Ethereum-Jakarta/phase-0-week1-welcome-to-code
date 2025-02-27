// ## Soal 2. Melakukan Looping Menggunakan For
// // Problem
// // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua.

let maju = 'LOOPING PERTAMA';
for (maju = 1; maju <= 10; maju++) {
  console.log(`${maju}. LOPING PERTAMA`)
}
console.log("=====================================");
let mundur = 'LOOPING KEDUA';
for (mundur = 10; mundur >= 1; mundur--) {
  console.log(`${mundur}. LOPING KEDUA`);
}