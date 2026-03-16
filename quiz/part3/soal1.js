// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let number = 0;
const patokanMaju = 5;
const patokanMundur = 0;

console.log("LOOPING MAJU");
while (number < patokanMaju){
    number++;
    console.log(number);
}

console.log("LOOPING MUNDUR");
while(number > patokanMundur){
    number--;
    console.log(number);
}