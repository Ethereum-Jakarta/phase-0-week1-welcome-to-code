// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!
// user isi nama dan peran
// cek nama dan peran
// kalo naanya kosong dan peran kosong kasih tau "nama wajib diisi"
// kalo nama ada isinya tapi peran kosong kasih tau "Pilih Peranmu untuk memulai game"
// kalo peran ksatria kasih tau "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
// kalo peran tabib kasih tau "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
// kalo peran penyihir kasih tau "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// kalo peran selain itu kasih tau "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "Asa", peran = "Tabib";
//code disini gunakan console.log untuk outputnya

if (nama === "" && peran === "") {
    console.log("nama wajib diisi");
} else if (nama !== "" && peran === "") {
    console.log("Pilih Peranmu untuk memulai game");
} else if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
}   else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}         