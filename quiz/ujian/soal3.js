// ## Soal 3
// ```js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // menghitung jam dengan cara membagi menit dengan 60 dan di bulatkan
    var jam = Math.floor(menit / 60);

    // menghitung sisa menit dengan dibagi angka 60
    var minutes = menit % 60;

    // me return menit dalam format jam:menit jika sisa menit diatas 10 dan jam: 0 + menit jika menit sisa dibawah 10 (9-0)
    if (minutes < 10) {
        return jam + ":" + 0 + minutes;
    } else {
        return jam + ":" + minutes;
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00