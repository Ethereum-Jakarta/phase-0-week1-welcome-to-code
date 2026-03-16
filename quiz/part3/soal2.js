// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


const patokanMaju = 5;
const patokanMundur = 0;

console.log("LOOPING MAJU");
for(let i = 0 ; i < patokanMaju; i++){
    console.log(i);
}

console.log("LOOPING MUNDUR");
for(let x = 5; x>patokanMundur; x--){
    console.log(x);
}