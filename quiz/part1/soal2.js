// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch(bulan){
    case 1:
        console.log(tanggal, "Januari", tahun);
    case 2:
        console.log(tanggal, "Februari", tahun);
    case 3:
        console.log(tanggal, "Maret", tahun);
    case 4:
        console.log(tanggal, "April", tahun);
    case 5:
        console.log(tanggal, "Mei", tahun);
    case 6:
        console.log(tanggal, "Juni", tahun);
    case 7:
        console.log(tanggal, "Juli", tahun);
    case 8:
        console.log(tanggal, "Agustus", tahun);
    case 9:
        console.log(tanggal, "September", tahun);
    case 10:
        console.log(tanggal, "Oktober", tahun);
    case 11:
        console.log(tanggal, "November", tahun);
    case 12:
        console.log(tanggal, "Desember", tahun);
}
