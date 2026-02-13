console.log("soal ke-1");

function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut())

console.log("soal ke-2")

function calculateMultiply(number1, number2) {
    return number1 * number2;
}

let num1 = 5;
let num2 = 2;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

console.log("soal ke-3");

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

let name = "Cahaya";
let age = 22;
let address = "Jl. Mulya Jaya Kota Pekanbaru";
let hobby = "Nonton"

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
