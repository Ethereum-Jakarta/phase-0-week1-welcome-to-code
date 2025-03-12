// # Sepaham apakah kalian tentang fungsi? | Part 4

// ## Soal 1
// ```js
// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

// bikin fungsinya disini

function shoutOut(){
    return 'Halo Function!'
}

// // // ------------------------------------
console.log(shoutOut())
// // ------------------------------------
// ```

// ## Soal 2
// ```js
// // Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// // dua parameter yang dikirim.

// //bikin fungsinya disini

function calculateMultiply(){
    return num1 * num2
}

let num1 = 5
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);

// // ------------------------------------
console.log(`Hasil dari perkalian antara num 1 dan 2 adalah ${hasilPerkalian}`)
// // -----------------------------------
// ```
// ## Soal 3
// ```js
// // Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// // satu kalimat berikut: 
// // "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

// //bikin fungsinya disini

function processSentence(){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

let name = "Roderick";
let age = 21;
let address = "Jl. Mars RW 4 RT 1";
let hobby = "Menjelajah ke planet lain";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
// ```
// ---
// Materi Function: [Link](../../study-materials/part6.md)