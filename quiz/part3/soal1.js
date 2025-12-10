// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


//================================\\


//looping while penambahan
//let langkah artinya langkah pertama yang diambil adalah 1
//kemudian dengan while mencari langkah berapa saja yang harus dilalui hingga langkah yang ditentukan (7)

console.log("========== Looping Pertama ==========")

let langkah = 1;

while (langkah <= 7) {
    console.log(`Langkah ke : ${langkah}`);
    langkah++
}


//================================\\


//looping while dikurangi
//saldo awalmu adalah 10 kemudian saldo itu menghilang secara perlahan

console.log("========== Looping Kedua ==========")

let saldo = 10;

while (saldo >= 0) {
    console.log(`Saldomu Sisa : ${saldo}`)
    saldo--
}