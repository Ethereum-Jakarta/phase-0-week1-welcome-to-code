let tanggal = 31; // Angka antara 1 - 31
let bulan = 10; // Angka antara 1 - 12
let tahun = 1995; // Angka antara 1900 - 2200

if (tanggal < 1 || tanggal > 31)    {
    console.log("tanggal tidak valid");
} else if (tahun < 1900 || tahun > 2200) {
    console.log("Tahun tidak valid")
}

switch (bulan) {
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
}