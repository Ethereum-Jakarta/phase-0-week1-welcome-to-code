// soal 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

function processSentence(){
    return "nama saya " + name + ", " +"umur saya " + age +", "+"asal saya "+ address +", "+"hobi saya "+ hobby
}

let name = "Dappa";
let age = 17;
let address = "Serang, Banten";
let hobby = "Coding";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
console.log('SELESAI')