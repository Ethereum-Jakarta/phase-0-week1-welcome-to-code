// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let firstWord = word.substring(0, 3);  // "wow"
let second = word.substring(3, 14);    // "JavaScript"
let third = word.substring(14, 17);    // "is"
let fourth = word.substring(17, 20);   // "so"
let five = word.substring(20, 25);     // "cool"

console.log(firstWord + second + third + fourth + five);