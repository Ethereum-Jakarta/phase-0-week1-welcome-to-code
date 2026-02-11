//Soal 3

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

// let name = "Agus";
// let age = 30;
// let address = "Jln. Malioboro, Yogjakarta";
// let hobby = "gaming";

// let fullSentence = processSentence(name,age,address,hobby);
// console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

function processSentence(name, age, address, hoby) {
    console.log(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hoby}!`);
}


processSentence("ucok", "21", "Jln. Cilegok Hangser, London", "Ngoding");
processSentence("asep", "18", "Jln. Peak, Bermuda", "Makan angin");
processSentence("aldo enclom", "1000", "Jln. Mars, Cibaok", "nonton rusdi");