//1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let hitung = 1;
console.log("Looping pertama")
while (hitung <= 10) {
  console.log(hitung + " Hitung Maju")
  hitung++
}


//loop kedua
console.log("Looping kedua")
while (hitung >= 1) {
  console.log(hitung - 1 + " Hitung Mundur")
  hitung--
}

//2
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua.

let hitung1 = 0;
for (let i = 1; i <= 10; i++) {
  hitung1++
  if (hitung1 == 1) {
    console.log("Looping pertama")
  }
  console.log(hitung1 + " Hitung maju ");
}

for (let j = 10; j > 1; j--) {
  if (hitung1 == 10) {
    console.log("Looping ke-Dua")
  }
  hitung1--
  console.log(hitung1 + " Hitung Mundur");
}



//3
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let result = "";
for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    result += index + " Genap"
  } else {
    result += index + " Ganjil"
  }
  result += "\n"
}

console.log(result);


//4
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//counter sebesar 2
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(i + " Kelipatan 3");
  }
};

//counter sebesar 5
for (let j = 1; j <= 100; j += 5) {
  if (j % 6 === 0) {
    console.log(j + " Kelipatan 5")
  }
};

//counter sebesar 9
for (let k = 1; k <= 100; k += 9) {
  if (k % 10 === 0) {
    console.log(k + " Kelipatan 9");
  }
};



//5
// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****
let input = 5
let result1 = ""
for (let i = 0; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    result1 += "*";
  }
  result1 += "\n";
}
console.log(result1)