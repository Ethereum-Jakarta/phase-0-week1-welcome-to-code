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

//code switch case kamu disini
let namaBulan = "";
if (tanggal < 1 || tanggal > 31) {
  console.log("Tanggal tidak valid");
}
if (bulan < 1 || bulan > 12) {
  console.log("Bulan tidak valid");
}
if (tahun < 1900 || tahun > 2200) {
  console.log("Tahun tidak valid");
}
switch (true) {
  case bulan === 1:
    namaBulan = "Januari";
    break;
  case bulan === 2:
    namaBulan = "Februari";
    break;
  case bulan === 3:
    namaBulan = "Maret";
    break;
  case bulan === 4:
    namaBulan = "April";
    break;
  case bulan === 5:
    namaBulan = "Mei";
    break;
  case bulan === 6:
    namaBulan = "Juni";
    break;
  case bulan === 7:
    namaBulan = "Juli";
    break;
  case bulan === 8:
    namaBulan = "Agustus";
    break;
  case bulan === 9:
    namaBulan = "September";
    break;
  case bulan === 10:
    namaBulan = "Oktober";
    break;
  case bulan === 11:
    namaBulan = "November";
    break;
  case bulan === 12:
    namaBulan = "Desember";
    break;
}
console.log(`${tanggal} ${namaBulan} ${tahun}`);
