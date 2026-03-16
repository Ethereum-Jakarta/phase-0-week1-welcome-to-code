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

 // 1. Isi nama di dalam variabel nama, dan isi peran dalam variable peran
 // 2. Cek apakah nama dan peran sudah terisi
 // 3. Jika nama dan peran belum terisi, maka akan memberikan respon "Isi nama dan pilih peran untuk memulai game"
 // 4. Jika nama belum terisi, tapi peran terisi, maka akan memberikan respon "Isi nama dan pilih peran untuk memulai game"
 // 5. Jika nama terisi, tapi peran belum, maka akan memberikan respon "Pilih Peranmu untuk memulai game"
 // 6. Jika nama dan peran terisi, maka akan menampilkan nama yang diisi dan peran yang dipilih dan memberikan respon sesuai peran yang dipilih
 // 7. Jika peran yang dipilih bukan Ksatria, Tabib, atau Penyihir, maka akan memberikan respon "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

//code disini gunakan console.log untuk outputnya

let nama = "", peran = "";

if (nama === "" && peran === "Ksatria") {
    console.log("Isi Nama dan pilih Peran untuk memulai game")
    console.log("Nama: ")
    console.log("Peran: Pilih salah satu!(Ksatria/Tabib/Penyihir)")
} else if (nama === "") {
    console.log("Nama wajib diisi!")
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game")
    console.log("Nama: " + nama)
    console.log("Peran: Pilih salah satu!(Ksatria/Tabib/Penyihir)")
} else if (peran == "Ksatria") {
    console.log("Nama: " + nama)
    console.log("Peran: " + peran)
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran == "Tabib") {
    console.log("Nama: " + nama)
    console.log("Peran: " + peran)
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran == "Penyihir") {
    console.log("Nama: " + nama)
    console.log("Peran: " + peran)
    console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log("Nama: " + nama)
    console.log("Peran: " + peran)
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}