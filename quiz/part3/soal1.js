// Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


// LOOPING PERTAMA
console.log('LOOPING PERTAMA');
let index = 1;
while (index <= 10) {
    console.log(`Looping ke ${index}`);
    index++;
}

// LOOPING KEDUA
console.log('LOOPING KEDUA'); // Menampilkan judul sesuai soal
index = 10;
while (index >= 1) {
    console.log(`Looping terbalik ke ${index}`);
    index--;
}

