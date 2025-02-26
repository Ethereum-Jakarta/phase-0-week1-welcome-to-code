let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2025; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let Namabulan = '';
switch (bulan) {
    case 1:
        Namabulan = "Januari"
        break;
    case 2:
        Namabulan = "Februari"
        break;
    case 3:
        Namabulan = "Maret"
        break;
    case 4:
        Namabulan = "April"
        break;
    case 5:
        Namabulan = "Mei"
        break;
    case 6:
        Namabulan = "Juni"
        break;
    case 7:
        Namabulan = "Juli"
        break;
    case 8:
        Namabulan = "Agustus"
        break;
    case 9:
        Namabulan = "September"
        break;
    case 10:
        Namabulan = "Oktober"
        break;
    case 11:
        Namabulan = "November"
        break;
    case 12:
        Namabulan = "Desember"
        break;
    default:
        break;
}

console.log(`${tanggal} ${Namabulan} ${tahun}`);