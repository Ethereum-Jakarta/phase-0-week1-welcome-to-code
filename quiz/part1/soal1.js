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
// 1. Mulai
// 2. Buat variabel `nama` untuk menyimpan nama pemain.
// 3. Buat variabel `peran` untuk menyimpan peran pemain.
// 4. Cek apakah variabel `nama` kosong:
//    - Jika `nama` kosong, tampilkan pesan "Nama wajib diisi!" dan hentikan program.
// 5. Cek apakah variabel `peran` kosong:
//    - Jika `peran` kosong, tampilkan pesan "Pilih Peranmu untuk memulai game!" dan hentikan program.
// 6. Jika `nama` dan `peran` sudah diisi, lakukan pengecekan peran:
//    - Jika `peran` adalah "Ksatria", tampilkan pesan:
//      "Halo Ksatria <nama>, kamu dapat menyerang dengan senjatamu!"
//    - Jika `peran` adalah "Tabib", tampilkan pesan:
//      "Halo Tabib <nama>, kamu akan membantu temanmu yang terluka."
//    - Jika `peran` adalah "Penyihir", tampilkan pesan:
//      "Halo Penyihir <nama>, ciptakan keajaiban yang membantu kemenanganmu!"
//    - Jika `peran` tidak cocok dengan ketiga peran tersebut, tampilkan pesan:
//      "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada."
// 7. Selesai

let nama = "Dhimas";
let peran = "Ksatria";

console.log("Welcome to Proxytia")
if (!nama) {
    console.log("Nama wajib diisi!");
} else if (!peran) {
    console.log("Pilih Peranmu untuk memulai game!");
} else {
    let pesan;
    switch (peran) {
        case "Ksatria":
            pesan = `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
            break;
        case "Tabib":
            pesan = `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`;
            break;
        case "Penyihir":
            pesan = `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`;
            break;
        default:
            pesan = `Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.`;
            break;
    }
    console.log(pesan);
}




