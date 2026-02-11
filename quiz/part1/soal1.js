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
//membuat  4 kondisi menggunakan if else
//membuat kondisi, jika nama kosong, maka output tulisannya"nama wajib diisi"
//lanjutan kondisi, jika peran kosong, maka output tulisannya "pilih peranmu untuk memulai game"
//lanjutan kondisi, jika peran diisi Ksatria, maka output tulisannya 'halo Ksatria, ${nama} Kamu dapat menyerang dengan senjatamu"
//lanjutan kondisi, jika peran diisi Tabib, maka output tulisannya "halo tabib, ${nama} kamu akan membantu temanmu yang terluka"
//lanjutan kondisi, jika peran diisi Penyihir, maka output tulisannya "Halo Penyihir ${nama} ciptakan keajaiban yang membantu kemenanganmu!"
let nama = "icank", peran = "kodok";


//code disini gunakan console.log untuk outputnya

if (nama === "") {
    console.log("nama wajib diisi");
}else if(peran === ""){
    console.log("Pilih peranmu untuk memulai game");
}else if(peran === "Ksatria"){
    console.log(`Halo Ksatria, ${nama} Kamu dapat menyerang dengan senjatamu`);
}else if(peran ==="Tabib"){
    console.log(`Halo tabib, ${nama} kamu akan membantu temanmu yang terluka `);
}else if(peran ==="Penyihir"){
    console.log(`Halo Penyihir ${nama} ciptakan keajaiban yang membantu kemenanganmu!`);
}else console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");

