//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let jumlah_x=0
    let jumlah_o=0
    for(let i=0; i<str.length; i++){
        if(str[i]==="x"||str[i]==="X"){
            jumlah_x++
        }else if(str[i]==="o"||str[i]==="O"){
            jumlah_o++
        }
    }
    return jumlah_x===jumlah_o
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true