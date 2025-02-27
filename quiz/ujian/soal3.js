// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu paramete - 60r berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    let konvJam = 0;
    let konvMenit = 0;
    if (menit >= 60) {
        konvJam = Math.floor(menit / 60);
        konvMenit = menit % 60;
    }else {
        konvJam = 0;
        konvMenit = menit;
    }

    if(konvMenit < 10) {
        konvMenit = "0" + konvMenit;
    }

    return konvJam + ":" + konvMenit;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00