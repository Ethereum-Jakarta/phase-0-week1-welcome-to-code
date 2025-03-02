//SOAL 1
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

//Algoritma
/*
1. Membuat variabel untuk 'nama' dan 'peran'
2. Jika variabel 'nama' memiliki nilai kosong, maka program akan menampilkan peringatan "Nama wajib diisi" begitupun dengan variabel 'peran'
3. Jika variabel 'peran' memiliki nilai antara Kesatria, Tabib, dan Penyihir, maka program akan menampilakan sambutan di output dengan nama dan peran di dalamnya
*/

//Code
    console.log("\nMr. X: Selamat datang di dunia P R O X I T Y A dimana anda bisa menjadi Kesatria, Tabib dan juga Penyihir. Ayo buatlah kelompok untuk menjelajahi dungeon\n\n") //prolog:)
    let nama =""; //variabel nama
    let peran ="";  //variabel peran

    //kondisi
    if (nama===""){
        console.log("Nama wajib diisi!!!\n")  //jika nama kosong akan muncul peringatan
    }else if (peran==="") {
        console.log("Pilih peranmu untuk memulai game!!!\n")  //jika peran kosong akan muncul peringatan
    }else if(peran === "Kesatria"){
        console.log(`Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!\n`) 
    }else if(peran === "Tabib"){
        console.log(`Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka\n`)
    }else if(peran === "Penyihir"){
        console.log(`Halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!\n`)
    }else{
        console.log(`${nama} kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada :(\n`)
    }

//SOAL 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!

//Algoritma
/*
1. Membuat variabel untuk 'tanggal','bulan', dan 'tahun'
2. Jika variabel 'bulan' memiliki nilai antara 1-12, maka program akan menampilkan output "tanggal (nama bulan) tahun"
3. Jika variabel 'bulan' memiliki >=13, maka program akan menampilkan output "Mana ada"
*/

//Code
let tanggal=12; //variabel tanggal antara 1-31
let bulan=12;  //variabel bulan antara 1-12
let tahun=2012;  //variabel tahun 1900-2200

switch(bulan){ //kondisi yang diambil dari angka pada bulan menjadi kata
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log("Mana ada"); //jika nilai dari variabel bulan >=13 maka akan muncul "Mana ada"
        break;
}