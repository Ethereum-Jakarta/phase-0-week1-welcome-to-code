//Belajar Looping | Part 3
//Soal 1

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let i = 1;
console.log("LOOPING PERTAMA");
while(i <= 10) {
  console.log(i + " Looping 1");
  i += 1;
}

console.log();

console.log("LOOPING KEDUA");
i = 10;
while(i >= 1) {
  console.log(i + " looping 2");
  i -= 1;
}

console.log("===============================================");

// Soal 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let a = 1;
console.log("LOOPING PERTAMA");
for(a = 1; a <= 10; a++) {
  console.log(a + " Looping 1");
}

console.log();

console.log("LOOPING KEDUA");
for(a = 10; a >= 1; a--) {
  console.log(a + " Looping 2");
}

console.log("===============================================");

//Soal 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.
// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let b = 1;
while(b <= 100) {
  if(b % 2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
  b++;
}

console.log("===============================================");

//Soal 4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

let c = 1;
let d = 1;
let e = 1;
while(c <= 100) {
  if(c % 3 == 0) {
    console.log(c + " kelipatan 3");
  }
  c += 2;
}

console.log();

while(d <= 100) {
  if(d % 6 == 0) {
    console.log(d + " kelipatan 6");
  }
  d += 5;
}

console.log();

while(e <= 100) {
  if(e % 10 == 0) {
    console.log(e + " kelipatan 10");
  }
  e += 9;
}

console.log("===============================================");

//Soal 5. Bintang asteriks
    
let input = 5;
let f = "";
for(let i = 0; i < input; i++) {
  f += "*";
  console.log(f);
}
