function xo(str) {
    let o = 0;
    for (let x = 0; x < str.length; x++) {
    if (str[o] === 'x') {
        return true;
    }else{
        return false
    }
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true