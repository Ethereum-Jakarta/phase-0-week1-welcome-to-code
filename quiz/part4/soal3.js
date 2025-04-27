//algoritma
//membuat function yang bisa menyusun variabel menjadi sebuah kalimat
//variabel
let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
//function

function processSentence (nama, age, address, hobby) {
    kalimat = `Nama saya ${nama}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
    return kalimat;
}

let fullSentence = processSentence(nama, age, address, hobby);
console.log (fullSentence)