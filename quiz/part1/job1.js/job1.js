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
// 1. cek apakah nama kosong
// - jika iya, tampilkan "nama wajib diisi"
// 2. cek apakah peran kosong 
// - jika iya, tampilkan " pilih peran muu untuk memulai game"
// 3. cek isi dari variabel peran : 
// - jika "ksatria", tampilkan "halo ksatria(nama), kamu dapat menyerang dengan senjatamu"
// - jika "tabib", tampilkan "halo tabib(nama), kamu akan membantu teman mu yang terluka!"
// - jika "penyihir ", tampilkan "halo penyihir (nama), ciptakan keajaiban yang membantu kememenangan"
// - jika tidak sesuai , tampilan "tapi kayaknya kamu jadi bot aja,peran yang kamu pilih ga ada"


let nama = "dapa", peran = "tabib";


//code disini gunakan console.log untuk outputnya

if (nama === "")  {
    console.log("nama wajib diisi");
} else if (peran ==="") {
    console.log("pilih peranmu untuk memulai game");
} else {
    if (peran === "ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
            else if (peran === "tabib") {
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
            }
            else if (peran ===  "penyihir") {
                console.log (`halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenangan!`);
            }
                    else {
                        console.log ("tapi kyaknya kamu jadi bot aja ya, peran yg kamu  pilih ga ada");
                    }
                
            }
