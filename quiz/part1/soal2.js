// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let nama_bulan;
switch (bulan) {
  case 1: 
    nama_bulan = "Januari"; 
    break;
  case 2: 
    nama_bulan = "Februari"; 
    break;
  case 3: 
    nama_bulan = "Maret"; 
    break;
  case 4: 
    nama_bulan = "April"; 
    break;
  case 5: 
    nama_bulan = "Mei"; 
    break;
  case 6: 
    nama_bulan = "Juni"; 
    break;
  case 7: 
    nama_bulan = "Juli"; 
    break;
  case 8: 
    nama_bulan = "Agustus"; 
    break;
  case 9: 
    nama_bulan = "September"; 
    break;
  case 10: 
    nama_bulan = "Oktober"; 
    break;
  case 11: 
    nama_bulan = "November"; 
    break;
  case 12: 
    nama_bulan = "Desember"; 
    break;
  default: 
    nama_bulan = "Bulan tidak valid";
}

console.log(`${tanggal} ${nama_bulan} ${tahun}`);