function xo(xo) {
    let cX = 0;
    let c0 = 0;

    for (let i = 0; i < xo.length; i++) {
        if (xo[i] === 'x') {
            cX++;
        } else if (xo[i] === 'o') {
            c0++;
        }
    }

    return cX === c0;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true