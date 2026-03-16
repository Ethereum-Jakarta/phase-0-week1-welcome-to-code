// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 3; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 8 ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2008; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini


let Tanggal = 12;  //isi angka 1-31
let Bulan = 8; //isi angka 1-12
let Tahun = 2008; // isi angka 1900-2200

let namabulan = ""; // variabel untuk menyimpan nama bulan

//pake switchcase buat menentukan nama bulan berdasarkan angka
switch (bulan) {
    case 1:
        namabulan  = "januari";
        break;
    case 2: 
        namabulan = "februari";
        break;
    case 3:
        namabulan = "maret";
        break;
    case 4: namabulan = "april";
        break;
    case 5: namabulan = "mei";
        break;
    case 6: namabulan = "juni";
        break;
    case 7: namabulan = "juli";
         break;
    case 8: namabulan = "agustus";
         break;
    case 9: namabulan = "september";
         break;
    case 10: namabulan = "oktober";
         break;
    case 11: namabulan = "november";
         break;
    case 12: namabulan = "desember";
         break;
    default:
        namabulan = "bulan tidak valid / bulan ga ada"; // jika input bulan tidak valid 
}

if (tanggal < 1 || tanggal > 31) {
    console.log("tanggal tidak valid"); 
}   else if (tahun < 1900 || tahun > 2200) {
    console.log("tahun tidak valid");
}  else {
    console.log(`${tanggal} ${namabulan} ${tahun}`);
}
