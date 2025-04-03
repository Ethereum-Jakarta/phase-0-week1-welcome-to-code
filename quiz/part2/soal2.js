// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = "wow JavaScript is so cool";

let firstWord = word.substring(0, 3);  // "wow"
let second = word.substring(3, 14);    // "JavaScript"
let third = word.substring(14, 17);    // "is"
let fourth = word.substring(17, 20);   // "so"
let five = word.substring(20, 25);     // "cool"

console.log(firstWord + second + third + fourth + five);
