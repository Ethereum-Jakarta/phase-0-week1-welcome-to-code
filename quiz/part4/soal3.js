

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}


let name = "DonPolo";
let age = 29;
let address = "Jln. Coblong, Bandung";
let hobby = "ngoding";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 