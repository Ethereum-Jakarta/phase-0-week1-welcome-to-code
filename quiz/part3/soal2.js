// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


//================================\\

//looping maju langkah 1 sampai 7

console.log("========== Looping Pertama ==========")

for (let langkah = 1; langkah <= 7; langkah++) {
    console.log(`Langkah Ke: ${langkah}`)

}


//================================\\


//looping saldo hilang dari 10 ke 0

console.log("========== Looping Kedua ==========")

for (let saldo = 10; saldo >= 0; saldo--) {
    console.log(`Sisa Saldo: ${saldo}`)

}