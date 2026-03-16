//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let jumlahX = 0;
    let jumlahO = 0;
   
    for (let i = 0; i < str.length; i++){
        let karakter = str[i];
        if (karakter === 'x'){
            jumlahX++;

        }else if (karakter === 'o'){
            jumlahO++;
        }
    }
    //mengembalikan TRUE jika jumlah X sama dengan jumlah O, dan FALSE jika tidak.
    return jumlahX === jumlahO;
        
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true