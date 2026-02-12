# Belajar Looping | Part 3
## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//LOOPING PERTAMA
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//LOOPING KEDUA

let x = 10;

while (x >= 1) {
    console.log(x);
    x--;
}

```
## Soal 2. Melakukan Looping Menggunakan For
```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama");

for (let x = 1; x <= 10; x++) {
    console.log(x);
}

console.log("Looping Kedua");

for (let y = 10; y >= 1; y--) {
    console.log(y);
}

```
## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let x = 1; x <= 100; x++) {
    if (x % 2 === 0) {
        console.log( x + " " + "Genap" );
    }
        else {
            console.log( x + " " + "Ganjil" );
        }
    }  

```
## Soal 4. counter kelipatan
```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let x = 1; x <= 100; x += 2) {
    if ( x % 3 === 0) {
        console.log( x + " " + "Kelipatan 3" );
    }
}

for (let x = 1; x <= 100; x += 5) {
    if ( x % 6 === 0) {
        console.log( x + " " + "Kelipatan 6" );
    }
}

for (let x = 1; x <= 100; x += 9) {
    if ( x % 10 === 0) {
        console.log( x + " " + "Kelipatan 10" );
    }
}

```
## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut

let input = 5;

for (let x = 1; x <= input; x++) {
    let bintang = "";
    for (let y = 1; y <= x; y++) {
        bintang += "*"
    } console.log(bintang);
}

//hasilnya
//*
//**
//***
//****
//*****
```

---
Tips pengerjaan ada di video berikut :
[Looping](https://youtu.be/kyobpgoqx2c)

[Materi Looping](../../study-materials/part5.md)