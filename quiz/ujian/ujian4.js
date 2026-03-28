//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

/*
/////////////////////////////////////////
    FUNCTION XO
///////////////////////////////////////
*/

function xo(str) {
    let countX = 0;
    let countO = 0;

    // loop carater string
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countX++;
        } else if (str[i].toLowerCase() === 'o') {
            countO++;
        }
    }

    // return if x = o
    return countX === countO;
}

/*
/////////////////////////////////////////
    TEST CASE OR CONSOLE LOG
///////////////////////////////////////
*/

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

/*
/////////////////////////////////////////
            END OF CODE
///////////////////////////////////////
*/  