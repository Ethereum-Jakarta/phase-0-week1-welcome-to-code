console.log("====================================");
console.log("===============Soal 1===============");
// Soal 1
function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut());

console.log("====================================");
console.log("===============Soal 2===============");
// Soal 2
let num1 = 1;
let num2 = 2;

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

console.log("====================================");
console.log("===============Soal 3===============");
// Soal 3
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
