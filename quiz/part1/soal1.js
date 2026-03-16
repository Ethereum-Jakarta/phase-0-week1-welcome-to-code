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
//Start
//diawal melakukan pengecekan apakah variabel nama memiliki data atau tidak dan pengecekan apakah variabel peran memiliki data atau tidak
//apabila satu atau kedua varibel tidak memiliki data maka akan menampilkan peringatan yang sudah ditentukan
//penegcekan kedua variabel tersebut menggunakan if statemen
//setelah pengecekan isi data dari kedua varibel tersebut dilanjukan dengan respons dari nama dan peran yang akan ditampilkan
//repon akan ditentukan dengan if statmen dengan kondisi yang melibatkan operator logika seperti &&
//penentuan if statemen dengan mengecek apakah variabel nama tidak kosong dan variabel peran sesuai dengan peran yang ada
//setelah itu akan menampilkan respon sesuai dengan nama dan peran yang dipilih
//untuk respon dengan kondisi varibel nama berisi data namun variabel peran tidak berisi data ataupun tidak sesuai dengan peran yang terdia
//akan ditampilkan reapon "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
//Finish

let nama = "asfa", peran = "Penyihir";

// code disini gunakan console.log untuk outputnya

if (nama === ""){
    console.log("nama wajib diisi");
}
if (peran === ""){
    console.log("Pilih Peranmu untuk memulai game");
}
if (nama !== "" && peran !== ""){
    if(peran === "Ksatria"){
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    else if (peran === "Tabib"){
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    }
    else if (peran === "Penyihir"){
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
    else{
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}