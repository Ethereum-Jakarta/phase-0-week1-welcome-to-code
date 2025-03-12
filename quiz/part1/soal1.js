//js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria {nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib {nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir {nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

//Game Proxytia
//Masukkan 2 variabel yaitu nama, dan peran
//Untuk variabel peran harus memiliki isi data yaitu: Ksatria (1), Tabib (2), dan Penyihir (2)
//Untuk variabel nama harus diisi dengan nama pemain
//Jika nama kosong, maka akan diberikan peringatan seperti "Nama wajib diisi!"
//Jika peran kosong, maka pemain akan diberikan peringatan seperti "Pilih peranmu untuk memulai game"
//Setelah nama dan peran diisi, maka akan diberikan respon sesuai dengan peran yang dipilih
//Jika peran yang dipilih adalah Ksatria (1) maka akan diberikan respon "Halo Ksatria {nama}, kamu dapat menyerang dengan senjatamu!"
//Jika peran yang dipilih adalah Tabib (2)maka akan diberikan respone "Halo Tabib {nama}, kamu akan membantu temanmu yang terluka"
//Jika peran yang dipilih asalah Penyihir (3) maka akan diberikan respon "Halo Penyihir {nama}, ciptakan keajaiban yang membantu kemenanganmu!"
//Jika peran yang dipilih tidak ada makan akan diberi respon "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih tidak gaada"

//let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya

let nama = "Ikol", peran = "Ksatria";
if(nama === ""){
    console.log("Nama wajib diisi!");
}

else if(nama === "Ikol" && peran === ""){
    console.log("Pilih peranmu untuk memulai game");
}

else if(nama === "Ikol" && peran === "Ksatria"){
    console.log("Halo Ksatria " + nama + " kamu dapat menyerang dengan senjatamu!");
}
else if(nama === "Ikol" && peran === "Tabib"){
    console.log("Halo Tabib " + nama + " kamu akan membantu temanmu yang terluka");
}

else if(nama === "Ikol" && peran === "Penyihir"){
    console.log("Halo Penyihir " + nama + " ciptakan keajaiban yang membantu kemenanganmu!");
}
else{
    console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih gaada");
}