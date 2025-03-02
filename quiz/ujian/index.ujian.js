console.log("====================================");
console.log("==============Soal 1================");
//soal 1

function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
    return true;
  } else if (angka1 > angka2) {
    return false;
  } else {
    return -1;
  }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log("====================================");
console.log("==============Soal 2================");
//soal 2
function balikKata(kata) {
  var balik = "";
  for (var i = kata.length - 1; i >= 0; i--) {
    balik += kata[i];
  }
  return balik;
}

console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

console.log("====================================");
console.log("==============Soal 3================");
//soal 3
function konversiMenit(menit) {
  var jam = Math.floor(menit / 60);
  var menit = menit % 60;
  return jam + ":" + (menit < 10 ? "0" : "") + menit;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log("====================================");
console.log("==============Soal 4================");
//soal 4
function xo(str) {
  var x = 0;
  var o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "o") {
      o++;
    }
  }
  return x === o;
}

console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
