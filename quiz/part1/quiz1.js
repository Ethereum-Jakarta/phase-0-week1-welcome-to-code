// QUIZ PART 1

// Soal ke-1

/* 

Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai pembuatan game ini, diperlukan dua variabel (untuk sekarang), 
yaitu :
1. nama
2. peran 

Variabel "peran" harus berisi data, jika kosong maka pemain akan diberikan peringatan yang berbunyi: "Pilih Peranmu untuk memulai game". 
Adapun variabel "nama", jika kosong maka pemain akan diberikan peringatan yang berbunyi: "Nama wajib diisi".

Lalu, terdapat 3 peran berbeda di dalam game ini yaitu :
1) Ksatria
2) Tabib 
3) Penyihir

Tugas Anda adalah membuat program yang memeriksa isi variabel "peran" serta mengeluarkan respon yang sesuai dengan isi variabel tersebut. 

Ada empat jenis respons yang sesuai dengan ketiga jenis peran tersebut yaitu :
1) halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
2) halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
3) halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!

Tetapi sepertinya Anda jadi bot saja, yaitu peran yang Anda pilih tidak ada.

// Algoritma Soal ke-1

/*

1. Membuat variabel "nama" dan "peran".
2. Membuat conditional statement dengan IF yang berisi :
   - Jika kondisi variabel "nama" bernilai kosong, maka akan memunculkan pesan peringatan yang berbunyi "Nama wajib diisi!".
   - Jika kondisi variabel "peran" bernilai kosong, maka akan memunculkan pesan peringatan yang berbunyi "Pilih Peranmu untuk memulai game".
3. Membuat conditional statement dengan dengan SWITCH yang berisi :
   - Jika kondisi variabel "peran" bernilai "Ksatria", maka tampilkan respon yang berbunyi "Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!".
   - Jika kondisi variabel "peran" bernilai "Tabib", maka tampilkan respon yang berbunyi "Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka".
   - Jika kondisi variabel "peran" bernilai "Penyihir", maka tampilkan respon yang berbunyi "Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!".
   - Jika kondisi variabel "peran" bernilai kosong atau tidak ada atau menjadi bot, maka tampilkan respon yang berbunyi "Kamu menjadi bot saja, sebab peran yang kamu pilih tidak ada".

*/

let nama = "", peran = "";

if (nama === "") {
    console.warn("Nama wajib diisi!");
}

if (peran === "") {
    console.warn("Pilih peranmu untuk memulai game!");
}

switch (peran) {
    case "Ksatria":
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
        break;
    
    case "Tabib":
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`);
        break;

    case "Penyihir":
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        break;

    default:
        console.log("Kamu menjadi bot saja, sebab peran yang kamu pilih tidak ada!");
}

// Soal ke-2

/* 

Anda diberikan sebuah tanggal yang dapat diimplementasikan dalam tiga variabel, yaitu : 
1. hari
2. bulan, 
3. tahun. 

Di sini Anda diminta untuk membuat format tanggal. 

Misalnya tanggal yang diberikan adalah hari ke-1, bulan ke-5, dan pada tahun 1945, 
maka output yang harus Anda hasilkan adalah "1 Mei 1945".

Gunakan switch case untuk kasus ini!

Contoh:

let hari = 21; let bulan = 1; let tahun = 1945;

Maka hasil yang akan tampil di console adalah : 

21 Januari 1945

Tips: 
Gunakan keyword ini di google = "conditional switch case javascript" dan mulailah membaca dan mencontek di stackoverflow xixixi

*/

// Algoritma Soal ke-2

/*

1. Membuat variabel "tanggal", "bulan" dan "tahun" yang kesemuanya berisi nilai berupa angka,
   termasuk untuk variabel "bulan".
2. Membuat conditional statement dengan SWITCH untuk mengubah tampilan angka pada variabel "bulan"
   menjadi deskripsi nama bulannya yang sesuai untuk setiap bulan, dari bulan ke-1 sampai 12.
3. Setiap nama bulan yang sudah diolah di dalam conditional statement dengan SWITCH, buat dan masukkan ke dalam variabel "namaBulan".
4. Menggabungkan nilai pada variabel "tanggal", "namaBulan" dan "tahun".
5. Menampilkan hasilnya dengan "console.log()"".

*/

let tanggal = 12;       // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2;        // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001;       // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let namaBulan;

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        breakl
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);

