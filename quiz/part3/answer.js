// console.log("soal ke-1");

// console.log("looping while pertama")
// let i = 1;
// while (i < 10) {
//     console.log("angka ke-" + i);
//     i++
// }

// console.log("looping while kedua")
// let j = 10;
// while (j >= 1) {
//     console.log("angka ke-" + j);
//     j--
// }

// console.log("soal ke-2");

// console.log("looping for pertama");
// for (let i = 1; i < 10; i++) {
//     console.log("angka ke-" + i);
// }

// console.log("looping for kedua");
// for (let i = 10; i >= 1; i--) {
//     console.log("angka ke-" + i);
// }

// console.log("soal ke-3");

// let angka = ""
// for (let i = 1; i <= 100; i++) {
//     // console.log("angka ke-" + i);
//     if (i % 2 !== 0) {
//         angka = "ANGKA GANJIL"
//     } else {
//         angka = "ANGKA GENAP"
//     }
//     console.log(`Angka ke-${i} adalah ${angka}`);
// }

// console.log("soal ke-4");

// for (let i = 1; i <= 100; i += 2) {
//     // console.log(i)
//     if (i % 3 === 0) {
//         console.log(`${i} kelipatan 3`);
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i += 5) {
//     if (i % 6 === 0) {
//         console.log(`${i} kelipatan 6`);
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i += 9) {
//     if (i % 10 === 0) {
//         console.log(`${i} kelipatan 10`);
//     } else {
//         console.log(i);
//     }
// }

console.log("soal ke-5");

let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*"
    }
    pattern += "\n";
}
console.log(pattern)

