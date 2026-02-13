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
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/* 
ALGORITMA PROXYTIA
1. Mulai
2. Buat variabel nama dan peran
3. Jika nama kosong, tampilkan "nama wajib diisi"
4. Bila nama ada tapi peran kosong, tampilkan "pilih peranmu untuk memulai game"
5. jika perannya adalah sebagai Ksatria, tampilkan "kamu dapat menyerang dengan senjatamu!"
6. Jika perannya adalah sebagai Tabib, tampilkan "kamu akan membantu temanmu yang terluka"
7. Jika perannya adalah sebagai Penyihir, tampilkan "ciptakan keajaiban yang membantu kemenanganmu!"
8. Jika perannya tidak sesuai dengan yang di tentukan sebelumnya, tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih gak ada"
9. Selesai
*/




let nama = "indi", peran = "Tabib";

//code disini gunakan console.log untuk outputnya

// Cek nama
if (nama === "") {
    console.log("Nama wajib diisi");
} else {
    // Kalau nama ada, cek peran
    if (peran === "") {
        console.log("Pilih Peranmu untuk memulai game");
    } else if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`Halo ${nama}, kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}