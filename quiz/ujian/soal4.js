function xo(str) {
    dataX = 0;
    dataO = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == 'x' ? dataX++ : dataO++
    }
    return dataX == dataO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true