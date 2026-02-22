// Soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

// ==== ALGORITMA ====

// 1. Buat sebuah function yang memiliki 3 parameter (tanggal, bulan, tahun)
// 2. Gunakan switce case condition untuk menyesuaikan bulan dalam number ke nama bulannya
// 3. Kembalikan/return value berupa string seperti "12 Januari 1945"


// ==== CODE IMPLEMENTATION ====

function formatTTL(tanggal, bulan, tahun) {
    if(tanggal === 0 || tanggal > 31) {
        console.log(`Masukan tanggal yang bener!`);
        return;
    }

    if(bulan === 0 || bulan > 12) {
        console.log(`Masukan nomer bulan yang benar!`);
        return;
    }

    if(tahun === 0 || tahun > 2200) {
        console.log(`Masukan tahun yang benar!`);
        return;
    }

    switch (bulan) {
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Febuari";
            break;
        case 3: 
            bulan = "Maret";
            break;
        case 4: 
            bulan = "April";
            break;
        case 5:
            bulan = "Mei";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "Desember";
        default:
            break;
            
    }

    console.log(`${tanggal} ${bulan} ${tahun}`);

}

// Scurity jika input nyeleneh
formatTTL(0, 0, 0);
formatTTL(1, 0, 0);
formatTTL(5, 13, 2000);
formatTTL(13, 8, 2201);


formatTTL(1, 1, 2000);
formatTTL(1, 5, 1945);
formatTTL(12, 1, 1945);
