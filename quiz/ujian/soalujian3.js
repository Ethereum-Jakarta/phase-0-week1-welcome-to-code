// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
  
function konversiMenit(menit){
    let detik = menit;
    let jumlah_menit = 0
    if (detik > 60){
        while (detik >= 60){
            detik -= 60;
            jumlah_menit++
        }
        if (detik < 10){
            return (`${jumlah_menit}:0${detik}`)
        }
        else{
            return (`${jumlah_menit}:${detik}`)
        }
    }
    else if(detik < 10){
        return (`0:0${detik}`)
    }
    else{
        return (`0:${detik}`)
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
