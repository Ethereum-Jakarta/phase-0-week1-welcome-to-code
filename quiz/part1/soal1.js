
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
//1. Buat variabel nama dan peran
//2. Buat kondisi untuk mengecek apakah nama kosong atau tidak
//3. Jika nama kosong, tampilkan pesan "nama wajib diisi"
//4. Buat kondisi untuk mengecek apakah peran kosong atau tidak
//5. Jika peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game"
//6. Buat kondisi untuk mengecek isi variabel peran
//7. Jika peran adalah "Ksatria", tampilkan pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//8. Jika peran adalah "Tabib", tampilkan pesan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//9. Jika peran adalah "Penyihir", tampilkan pesan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//10. Jika peran bukan salah satu dari ketiga pilihan di atas, tampilkan pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

//code disini gunakan console.log untuk outputnya
let nama = "Fall", peran = "Penyihir";

console.log("Selamat datang di game Proxytia!");
if (nama === "") {
  console.log("nama wajib diisi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} else {
  if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
  } else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
  }
}