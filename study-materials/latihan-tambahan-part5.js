// OPTIMASI
/*
Untuk meningkatkan efisiensi, kita bisa membatasi loop dalam hingga √i (akar kuadrat dari i), karena jika i tidak habis dibagi oleh bilangan hingga √i, maka i pasti bilangan prima.

Kode Optimasi:
*/

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     // Hanya cek hingga √i
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// LATIHAN TAMBAHAN
/*
1. Modifikasi program untuk menampilkan bukan bilangan prima dari 1 hingga 100.
2. Hitung jumlah bilangan prima dari 1 hingga 100.
3. Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.

Dengan memahami loop dan nested loop, Kalian bisa menangani kasus kompleks seperti pengolahan data multidimensi, algoritma sorting, dan generasi pola. Latih kemampuan dengan mencoba variasi pola dan algoritma!
*/
for (let i = 2; i <= 100; i++) {
  let bukanPrima = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      bukanPrima = false;
      break;
    }
  }
  if (!bukanPrima) {
    console.log(i);
  }
}
