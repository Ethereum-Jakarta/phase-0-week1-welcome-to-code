//soal2
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: '  + exampleFirstWord);
//lanjutkan dengan struktur log diatas

//kata ke 2
let secondword = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
console.log('Second Word: '  + secondword);

//kata ke 3
let thirdword = word[11] + word[16];

console.log('Third Word: '  + thirdword);

//kata ke 4
let fourthword = word[16] + word[1];

console.log('Fourth word: '  + fourthword);

//kata ke 5
let fifthword = word[21] + word[1] + word[1] + word[24];

console.log('Fifth word: '  + fifthword);




console.log (exampleFirstWord + " " +  secondword + " " +  thirdword + " " +  fourthword + " " +  fifthword);



