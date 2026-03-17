// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let first = word4.substring(0, 3);
let second = word4.substring(3,14);
let third = word4.substring(14,17);
let four = word4.substring(17,20);
let five = word4.substring(20,25);

let firstl = first.length;
let secondl = second.length;
let thirdl = third.length;
let fourl = four.length;
let fivel = five.length;


console.log(first + " with" +  + firstl + second + "with" +secondl + third + "with" + thirdl + four + "with" + fourl + five + "with" + fivel);