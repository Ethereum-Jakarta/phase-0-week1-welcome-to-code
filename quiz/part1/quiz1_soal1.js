// SOAL 1

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