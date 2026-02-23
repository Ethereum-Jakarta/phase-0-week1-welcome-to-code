// Soal 3


// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// ==== ALGORITMA ====
// 1. bagi staun menit dengan 60 menit/ 1 jam
// 2. gunakan modulsu untuk menemukan sisa bagi antara satuan menit dengan jam
// 3. susun menjadi format jam:menit sebagai string dan kembalikan nilainya

function konversiMenit(menit) {
    // you can only write your code here!
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;

    return sisaMenit < 10 ? `${jam}:0${sisaMenit}`: `${jam}:${sisaMenit}`;
   
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
