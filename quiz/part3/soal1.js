// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let number;

let args = process.argv.slice(2);
number = parseInt(args[0], 10);

if (number !== undefined) {
    console.log("LOOPING PERTAMA");

    let index = 1;
    while (index <= number) {
        console.log(index++);
    }

    console.log("LOOPING KEDUA");
    index = 1;
    while (index <= number) {
        console.log(number--);
    }
} else {
    console.log("Mohon inputkan angka");
}