// LATIHAN SOAL LOOPING
/*
Kita akan belajar cara implementasi konsep Looping di sebuah coding problems. Ini akan berguna untuk kalian melatih logic dan algoritma, karena looping ini senjata kalian untuk mengerjakan soal soal di RPN.

SOAL : Buatlah perulangan 1-100 dengan pertambahan counter 1. Di dalam perulangan:
  Jika angka kelipatan 4, tampilkan "FOUR"
  Jika angka kelipatan 7, tampilkan "SEVEN"
  Jika angka kelipatan 4 dan 7, tampilkan "FOURSEVEN"
  Jika tidak memenuhi kondisi di atas, tampilkan angka itu sendiri

Contoh Output:
1
2
3
FOUR
5
6
SEVEN
FOUR
...
28 (FOURSEVEN)
*/

// SOlUSI
// for (let i = 1; i < 100; i++) {
//   if (i % 28 === 0) {
//     console.log("28 (FOURSEVEN)");
//   } else if (i % 4 === 0) {
//     console.log(`${i} FOUR`);
//   } else if (i % 7 === 0) {
//     console.log(`${i} SEVEN`);
//   } else {
//     console.log(i);
//   }
// }

// Nested Loop
// for (let i = 0; i < 3; i++) {
//   // Outer loop
//   console.log(`Outer: ${i}`);

//   for (let j = 0; j < 2; j++) {
//     // Inner loop
//     console.log(`  Inner: ${j}`);
//   }
// }

// LATIHAN NESTED LOOP
/*
Disini kita akan belajar menggunakan nested loop dalam coding problems, mungkin keliatan susah banget untuk mempelajarinya.

Tapi, kalau kalian fokus ikutin step by step dan mencobanya langsung di terminal kalian, Nested Loop ini tidak terlalu rumit.

Kuncinnya adalah latihan menggunakan indexing dan fokus pada perubahan variable dari inner loop sama outer loop.

SOAL :
Buat program untuk menampilkan semua bilangan prima dari 1 hingga 100.
Bilangan prima adalah bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11, dst.).
*/
