// SOAL 1
/*
Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
yang kemudian akan ditampilkan di console.
*/

// SOLUSI
function shoutOut() {
  return `Halo Function!`;
}
console.log(shoutOut());

// SOAL 2
/*
Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
dua parameter yang dikirim.
*/

// SOLUSI
function calculateMultiply(nilai1, nilai2) {
  return nilai1 * nilai2;
}
console.log(calculateMultiply(2, 5));

// SOAL 3
/*
Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
satu kalimat berikut:
"Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
*/

// SOLUSI
function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, Umur saya ${age}, Alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}
console.log(processSentence("Tegar", 22, "Batam", "Ngantuk"));