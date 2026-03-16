// const mobil = {
//     merek: "Toyota", tahun: 2020,
//     warna: "Merah", harga: 50000000
//  };
// for (const key in mobil) {
//   console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
// }


//Latihan Soal Looping
// for (let i = 1; i <= 100; i++) {
//     if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
//         console.log("FOURSEVEN");
//     } else if (i % 4 === 0) {
//         console.log("FOUR");
//     } else if (i % 7 === 0) {
//         console.log("SEVEN");
//     } else {
//         console.log(i);
//     }
// }

// Nested Loop
// for (let i = 0; i < 3; i++) {       // Outer loop
//     console.log(`Outer: ${i}`);

//     for (let j = 0; j < 2; j++) {    // Inner loop
//         console.log(`  Inner: ${j}`);
//     }
// }

//Jenis-jenis loop
// for (let i = 1; i <= 3; i++) {
//     console.log(`Iterasi ke-${i}`);

//     let j = 1;
//     while (j <= 2) {
//         console.log(`  Sub-iterasi ke-${j}`);
//         j++;
//     }
// }

// SOAL
// Buat program untuk menampilkan semua bilangan prima dari 1 hingga 100.
// Bilangan prima adalah bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11, dst.).

// for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
//     let isPrime = true;                  // Flag untuk menKaliani bilangan prima

//     for (let j = 2; j <= Math.sqrt(i); j++) {        // Loop pembagi (2 hingga i-1)
//         if (i % j === 0) {                 // Jika i habis dibagi j
//             isPrime = false;                 // Bukan bilangan prima
//             break;                           // Keluar dari loop dalam
//         }
//     }

//     if (isPrime) {                       // Jika isPrime tetap true
//         console.log(i);                    // Tampilkan bilangan prima
//     }
// }

// Latihan tambahan (Optional)

// for (let i = 1; i <= 100; i++) {
//     let isPrime = i > 1;
//     for (let j = 2; j <= Math.sqrt(i); j++) { // Hanya cek hingga √i
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (!isPrime) {
//         console.log(i);
//     }
// }

// const mobil = { merek: "Toyota", tahun: 2020 };
// for (const key in mobil) {
//     console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
// }


// const reverseFunc = (data) => {
//     let result = "";

//     for (let i = data.length - 1; i >= 0; i--) {
//         result += data[i];
//     }

//     return result;
// }

// console.log(reverseFunc("Hello"));

// const data = "Hello"

// for (let i = data.length - 1; i >= 0; i--) {
//     console.log(data[i]);
// }



