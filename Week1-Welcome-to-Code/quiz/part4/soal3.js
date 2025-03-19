// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence () {
    return "Nama saya " + name + " umur saya "+ age + " alamat saya " + address + " dan saya mempunyai hobby yaitu " + hobby;
}

let fullSentence = processSentence();
console.log(fullSentence); 