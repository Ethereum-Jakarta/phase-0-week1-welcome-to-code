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

let waktu = ""

if(tanggal<1 || tanggal>31){
    console.log("Tanggal tidak valid")
}

let bulanKata = ''
switch(bulan){
    case 1:
        bulanKata = 'January';
        break;
    case 2:
        bulanKata = 'Februay';
        break;
    case 3:
        bulanKata = 'Maret';
        break;
    case 4:
        bulanKata = 'April';
        break;
    case 5:
        bulanKata = 'Mei';
        break;
    case 6:
        bulanKata = 'Juni';
        break;
    case 7:
        bulanKata = 'Juli';
        break;
    case 8:
        bulanKata = 'Agustus';
        break;
    case 9:
        bulanKata = 'September';
        break;
    case 10:
        bulanKata = 'Oktober';
        break;
    case 11:
        bulanKata = 'November';
        break;
    case 12:
        bulanKata = 'Desember';
        break;
    default:
        console.log("Bulan tidak valid")   
}

if(bulanKata){
    waktu = tanggal + ' '+ bulanKata + ' '+ tahun
    console.log(waktu)
}