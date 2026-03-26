// SOAL 3

/*

Problem :
- Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
dalam menit. 
- Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
- Contoh, jika menit adalah 63, maka function akan me-return "1:03".

*/

function konversiMenit(totalMenit) {
    let jam = Math.floor(totalMenit / 60);
    let menit = totalMenit % 60;

    if (menit < 10) {
        menit = "0" + menit;
    }

    return jam + ':' + menit
}
  
// Test Cases
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));