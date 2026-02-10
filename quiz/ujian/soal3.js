// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    if(menit >= 60){
        let formatMenit = menit % 60;
        let hasilJam = menit - formatMenit;
        let formatJam = hasilJam / 60;
        if(formatMenit < 10){
            return `${formatJam}:0${formatMenit}`;
        }else{
            return `${formatJam}:${formatMenit}`;
        }
    }else if(menit < 60){
        if(menit < 10){
            return `0:0${menit}`;
        }else{
            return `0:${menit}`;
        }
    }
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00