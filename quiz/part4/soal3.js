let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(a, b, c, d) {
    return `Nama saya ${a}, umur saya ${b} tahun, alamat saya di ${c}, dan saya punya hobby yaitu ${d}!`;
}

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);