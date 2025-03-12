// # Belajar Looping | Part 3
// ## Soal 1

// ```js
// // Problem
// // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// ```

let pertama = 1
let kedua = 10

while(pertama <= 10){
    console.log('LOOPING PERTAMA ' + pertama + ' MAJU')
    pertama++
}

while(kedua >= 1){
    console.log('LOOPING KEDUA ' + kedua + ' MUNDUR')
    kedua--
}

// ## Soal 2. Melakukan Looping Menggunakan For
// ```js
// // Problem
// // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// ```

let loopingPertama = 1
for(loopingPertama; loopingPertama <= 10; loopingPertama++){
    console.log('LOOPING PERTAMA ' + loopingPertama + ' MAJU')
}

let loopingKedua = 10
for(loopingKedua; loopingKedua >= 1; loopingKedua--){
    console.log('LOOPING KEDUA ' + loopingKedua + ' MUNDUR')
}

// ## Soal 3. Angka Ganjil dan Genap

// ```js
// // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:

// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// ```

for(let i = 1; i <= 100; i++){
    if(i%2===0){
        console.log('Angka ' + i + ' Adalah GENAP')
    }else{
        console.log('Angka ' + i + ' Adalah GANJIL')
    }
}

// ## Soal 4. counter kelipatan
// ```js
// // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// // Pada 3 perulangan baru ini periksa setiap angka counter:

// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3"dan seterusnya.
// ```

for(let pertambahan2 = 1; pertambahan2 <= 100; pertambahan2 += 2){
    if(pertambahan2 % 3 === 0){
        console.log(pertambahan2 + 'Kelipatan 3 dengan pertambahan 2')
    }
}


for(let pertambahan5 = 1; pertambahan5 <= 100; pertambahan5 += 5){
    if(pertambahan5 % 6 === 0){
        console.log(pertambahan5 + 'Kelipatan 6 dengan pertambahan 5')
    }
}

for(let pertambahan9 = 1; pertambahan9 <= 100; pertambahan9 += 9){
    if(pertambahan9 % 10 === 0){
        console.log(pertambahan9 + 'Kelipatan 10 dengan pertambahan 9')
    }
}

// ## Soal 5. Bintang asteriks
// ```js
// Problem buatlah bintang seperti berikut

let input = 5
for(let i = 1; i <= input; i++){
    let bintang = '';
    for(let j = 1; j <= i; j++){
        bintang+= '*';
    }
    console.log(bintang)
}

//hasilnya
//*
//**
//***
//****
//*****
