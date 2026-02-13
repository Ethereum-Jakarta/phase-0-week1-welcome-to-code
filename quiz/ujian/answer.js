// console.log("soal ke-1");

// function bandingkanAngka(angka1, angka2) {
//     if (angka2 > angka1) {
//         return true;
//     } else if (angka2 < angka1) {
//         return false;
//     } else {
//         return -1;
//     }
// }

// console.log(bandingkanAngka(5, 8)); // true
// console.log(bandingkanAngka(5, 3)); // false
// console.log(bandingkanAngka(4, 4)); // -1
// console.log(bandingkanAngka(3, 3)); // -1
// console.log(bandingkanAngka(17, 2)); // false

// console.log("soal ke-2");


// function balikKata(kata) {
//     let reverse = "";
//     for (let i = kata.length - 1; i >= 0; i--) {
//         reverse += kata[i]
//     }
//     return reverse
// }

// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS

// console.log("soal ke-3");

// function konversiMenit(menit) {
//     let hour = Math.floor(menit / 60);
//     let minute = menit % 60;

//     if (minute < 10) {
//         minute = "0" + minute;
//     }

//     return `${hour}:${minute}`
// }

// console.log(konversiMenit(63)); // 1:03
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00

console.log("soal ke-4");

function xo(str) {
    let result = "";
    let strX = 0;
    let strO = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] === "x") {
            strX += 1;
        } else {
            strO += 1;
        }
    }

    if (strX === strO) {
        return true;
    } else {
        return false;
    }
    // return `strX: ${strX} dan strO: ${strO}`
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true