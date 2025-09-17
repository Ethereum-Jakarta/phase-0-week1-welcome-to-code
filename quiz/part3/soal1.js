// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


// looping tambah
console.log(`ini looping pertama`)
let loopingPertama = 0
while (loopingPertama<=5) {
    console.log(`Ini Looping ke ${loopingPertama}`)
    loopingPertama++
}

console.log('\n')

//looping mundur 
console.log(`ini looping kedua`)
let loopingKedua = 5
while (loopingKedua>=1){
    console.log(`Ini Looping mundur ke ${loopingKedua}`)
    loopingKedua--
}
