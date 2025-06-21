/*
1.tujuan kita adalah untuk memprogram sebuah game sederhana dengan masukkan nama dan peran
2.langkah-langkah:
-kita buat 2 variable terlebih dahulu untuk menyimpan nama pemain dan peran pemain
-kita lakukan kondisi untuk mengecek,apakah pemain tersebut sudah mengisi nama dan mengisi perannya
-kalau nama ga diisi,akan muncul pesan "nama wajib diisi",kalau peran kosong akan muncul "peran wajib diisi"
-selesai
*/

let nama="Razaq";
let peran="Penyihir";

if(nama ===""){
    console.log("Nama Wajib Diisi");
}else if(peran ===""){
    console.log(`Halo ${nama},pilih peranmu untuk memulai game`)
}else if(peran === "ksatria"){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
}else if(peran === "Tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
}else if(peran === "Penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
}else{
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}




