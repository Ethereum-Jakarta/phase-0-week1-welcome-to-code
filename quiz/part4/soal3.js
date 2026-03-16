// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya ${address}, dan saya punya hobby yaitu ${hobby}!`;
}
let name = "daru";
let age = 19;
let address = "di jaktim";
let hobby = "nonton anime";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);