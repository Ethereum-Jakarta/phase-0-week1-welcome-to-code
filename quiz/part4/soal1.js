// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini
// Fungsi sebagai variabel
// Fungsi sebagai variabel
const potongApel = function(jumlah) {
    return jumlah * 4; // 1 apel dipotong jadi 4 🍴
};

// Fungsi sebagai parameter (higher-order function)

function shoutOut() {
    return ("halo function")
}

console.log(shoutOut(3, potongApel)); // 12





// Fungsi sebagai variabel

//function buatJus(apel, gula) {
//   return (`Jus ${apel} apel + ${gula} sendok gula 🍎!`);
//}

//console.log(buatJus(5, 2)); // Output: "Jus 5 apel + 2 sendok gula 🍎!"

//const potongApel = function(jumlah) {
//    return (jumlah * 4); // 1 apel dipotong jadi 4 🍴
//};

// Fungsi sebagai parameter (higher-order function)
//function prosesApel(apel, action) {
//    return action(apel);
//}

//console.log(prosesApel(3, potongApel)); // 12


