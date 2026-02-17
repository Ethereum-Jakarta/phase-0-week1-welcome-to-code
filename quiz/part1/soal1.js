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
// 1. Jika nama kosong, tampilkan "nama wajib diisi".
// 2. Jika nama terisi dan peran kosong, tampilkan "Pilih Peranmu untuk memulai game".
// 3. Jika peran adalah Ksatria, tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!".
// 4. Jika peran adalah Tabib, tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka".
// 5. Jika peran adalah Penyihir, tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!".
// 4. Selain itu, tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada".

let nama = "Benny",
  peran = "Ksatria";

if (nama === "") {
  console.log("nama wajib diisi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} else if (peran === "Ksatria" || peran === "ksatria") {
  console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib" || peran === "tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir" || peran === "penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`,
  );
} else {
  console.log(
    "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada",
  );
}
