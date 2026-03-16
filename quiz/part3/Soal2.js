// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let bahlil=''
let bahlil2=''
for(var i=0;i<10;i++) {
  bahlil+= i;
}
for(var i=9;i>=0;i--) {
  bahlil2+= i;
}
console.log('LOOPING PERTAMA MAJU: '+bahlil)
console.log('LOOPING KEDUA MUNDUR: '+bahlil2)