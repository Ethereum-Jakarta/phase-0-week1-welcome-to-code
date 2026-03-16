//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let x = [];
  let o = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x.push("x");
    } else {
      o.push("o");
    }
  }
  let result = x.length === o.length ? true : false;
  return result;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
