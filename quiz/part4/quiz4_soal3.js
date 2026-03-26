// SOAL 3

/*

Buatlah sebuah fungsi bernama processSentence() yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: 
"Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

*/

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(name, age, adress, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${adress}, dan saya punya hobby yaitu ${hobby}!`
}

let fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);