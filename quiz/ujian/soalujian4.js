//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let huruf = String(str).split('');
    let jumlah_x = 0
    let jumlah_o = 0
    for (a of huruf){
        if(a === 'x'){
            jumlah_x++
        }
        else if (a === 'o'){
            jumlah_o++
        }
    }
    if (jumlah_x === jumlah_o){
        return true
    }
    else{
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true