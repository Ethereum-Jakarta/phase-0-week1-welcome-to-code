
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60); // Hitung jumlah jam
    let sisaMenit = menit % 60; // Sisa menit setelah dikonversi ke jam

    // Jika sisaMenit kurang dari 10, tambahkan "0" di depan agar selalu dua digit
    sisaMenit = sisaMenit < 10 ? "0" + sisaMenit : sisaMenit;

    return jam + ":" + sisaMenit; // you can only write your code here!
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00