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

// mulai

// mengisi nama
// jika nama kosong maka akan menampilkan pesan (Nama wajib disi!)
// jika nama diisi maka akan menampilkan pilihan peran yang ada yaitu :
// 1.Ksatria
// 2.Tabib
// 3.Penyihir
// memilih pilih peran dengan mengisi sesuai nomor peran  
// jika peran tidak disi maka akan menampilkan pesan (pilih peranmu untuk memulai game)

// jika peran yang dipilih ksatria maka akan menampilkan pesan (halo Ksatria (nama) , kamu dapat menyerang dengan senjatamu!)
// jika peran yang dipilih Tabib maka akan menampilkan pesan (halo Tabib (nama) , kamu akan membantu temanmu yang terluka)
// jika peran yang dipilih Penyihir maka akan menampilkan pesan (halo Penyihir (nama), ciptakan keajaiban yang membantu kemenanganmu!)
// jika peran yang dipilih tidak sesuai dengan yang ada maka akan menampilkan pesan (tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada)

// selesai

let nama = "", peran = ""
//code disini gunakan console.log untuk outputnya

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function buatkarakter(nama, peran) {
    if (peran === "Ksatria") {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu.`);
    } 
    else if (peran === "Tabib") {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    } 
    else if (peran === "Penyihir") {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
    else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

function buatNama() {
    rl.question("Masukkan nama: ", function(nama) {

        if (!nama || nama.trim() === "") {
            console.log("Nama wajib diisi!\n");
            return buatNama(); 
        }

        pilihPeran(nama); 
    });
}

function pilihPeran(nama) {
    console.log("\nPilih Peran:");
    console.log("1. Ksatria");
    console.log("2. Tabib");
    console.log("3. Penyihir");

    rl.question("Masukkan nomor pilihan (1-3): ", function(pilihan) {

        let daftarPeran = ["Ksatria", "Tabib", "Penyihir"];
        let peran = daftarPeran[pilihan - 1];
        if (!peran) { 
            console.log("pilih peranmu untuk memulai game\n");
            return pilihPeran(nama);
        }

        buatkarakter(nama, peran);
        rl.close();
    });
}

buatNama(); 

