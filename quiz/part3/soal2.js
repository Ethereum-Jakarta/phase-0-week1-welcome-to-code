// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i;

console.log("Looping Pertama");
for(i = 0; i <= 10; i++){
    console.log(i);
};

if (i >= 11){
    console.log("\n");
    console.log("Looping Kedua");
    for(i = 10; i >= 0; i--){
        console.log(i);
    };
};