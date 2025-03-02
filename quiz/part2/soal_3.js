// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let satu = word3.substring(0, 3);
let dua = word3.substring(4, 13);
let tiga = word3.substring(15, 17);
let empat = word3.substring(18,20);
let lima = word3.substring(21, 25);

console.log('Kata pertama : '+satu);
console.log('Kata kedua   : '+dua);
console.log('Kata ketiga  : '+tiga);
console.log('Kata keempat : '+empat);
console.log('Kata kelima  : '+lima);
console.log(satu+" "+dua+" "+tiga+" "+empat+" "+lima)