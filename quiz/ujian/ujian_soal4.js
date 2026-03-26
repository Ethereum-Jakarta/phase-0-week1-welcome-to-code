// SOAL 4

/*

Problem :
- Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
- Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

*/

function xo(str) {
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
           countX++;
        } else if (str[i] === 'o') {
            countO++;
        } else {

        }
    }

    return countX === countO;
}
  
// Test Cases
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));