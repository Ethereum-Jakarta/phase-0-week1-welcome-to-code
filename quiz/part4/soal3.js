// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
const processSentence = (...biodata) => {
    const [nama, age, address, hobby] = biodata;

    return `Nama saya ${nama}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let name = "Rakha";
let age = 19;
let address = "Jln. Kampung durian runtuh";
let hobby = "Coding";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Rakha, umur saya 19 tahun, alamat saya di Jln. Kampung durian runtuh, dan saya punya hobby yaitu Coding!"