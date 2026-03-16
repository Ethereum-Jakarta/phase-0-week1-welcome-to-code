// SOAL 1
/*
Problem

Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
Jika kedua angka bernilai sama, function akan me-return -1.
*/

// SOLUSI
function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
    return true;
  } else if (angka1 === angka2) {
    return "-1";
  } else {
    return false;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// SOAL 2
/*
Problem

Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
*/

// SOLUSi
function balikKata(kata) {
  let balikkan = kata.split("").reverse().join("");
  return balikkan;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS
console.log(balikKata("Tegar"));

// SOAL 3
/*
Problem

Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

// SOLUSI
function konversiMenit(menit) {
  let jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  // cek jika sisa menit kurang dari 10, tambah 0 di depan
  if (sisaMenit < 10) {
    sisaMenit = `0${sisaMenit}`;
  }
  return `${jam}:${sisaMenit}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// SOAL 4
/*
Problem

Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

// SOLUSI
function xo(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += 1;
    } else if (str[i] === "o") {
      o += 1;
    }
  }
  return x === o;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
