// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//firts loop
console.log('Looping Pertama');

let number = 0;
while(number <= 10) {//jika number <= 10
    console.log(number);//tampilkan number
    number++;//number + 1
}

//second loop
console.log('\nLooping Kedua');

let num = 10;
while(num >= 0) {//jika num >= 0
    console.log(num);//tampilkan num
    num--;//num - 1
}