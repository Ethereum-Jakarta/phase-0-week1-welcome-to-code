// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;
let j = 9;
let k = 0;
let l = 9

console.log("Looping Pertama While")
while (i < 10) {
    i++;
    console.log(i)
}

console.log("Looping Kedua While")
while (j > 0) {
    j--;
    console.log(j)
}

console.log("Looping Pertama Do While")
do {
    console.log(k)
    k++
} while (k < 10)

console.log("Looping Kedua Do While")
do {
    console.log(l)
    l--
} while (l >= 0)



