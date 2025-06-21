/*
tujuan:menggabungan beberapa variable menjadi 1 kalimat
input:"Agus",30,"jln,malioboro,yogyakarta","gaming";
output:"Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
langkah-langkah:
1.kita buat 1 fungsi yang menerima 4 parameter
2.selanjutnya kita gabungkan semua parameter di dalam fungsi menggunakan template literal dan menyimpannya di variabel baru.
3.kita kembalikan (return) variabel yang berisi kalimat lengkap tersebut.
4.selesai
*/
function processSetence(name, age,address,hobby){
    const sentence=`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
    return sentence;
}
let name="Agus";
let age=30;
let address= "Jln. Malioboro, Yogjakarta";
let hobby="Gaming";
let fullSetence=processSetence(name,age,address,hobby);
console.log(fullSetence);