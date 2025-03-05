// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let number;

let args = process.argv.slice(2);
number = parseInt(args[0], 10);

if (number !== undefined) {
    console.log("LOOPING PERTAMA");
    for (let index = 1; index <= number; index++) {
        console.log(index);
    }

    console.log("LOOPING KEDUA");
    for (let index = number; index >= 1; index--) {
        console.log(index);
    }
} else {
    console.log("Mohon inputkan angka");
}