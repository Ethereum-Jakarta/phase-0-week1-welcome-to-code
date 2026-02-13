// Algoritma
// masukan nama 
// masukan peran
// jika tidak ada nama ? "nama wajib diisi"
// jika tidak ada peran ? "pilih peranmu untuk memulai game"
// memilih peran?
// jika perannya ksatria ? "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
// jika perannya bukan ksatria, tapi perannya tabib ? "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
// jika perannya bukan ksatria dan tabib, tapi perannya penyihir ? "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// jika perannya bukan ksatria, tabib dan penyihir ? "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

console.log("soal 1")
let peran = "";
let nama = "cahaya";

if (nama === "") {
    console.warn("Nama wajib diisi");
} else {
    if (peran === "") {
        console.warn("Pilih Peranmu untuk memulai game");
    }

    if (peran === "ksatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    } else if (peran === "penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    }
}


console.log("soal 2")
function tanggal(hari, bulan, tahun) {
    if (hari < 1 || hari > 31) {
        return "Tanggal tidak valid";
    }

    let namaBulan = "";
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
            break;
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
        default:
            return "Bulan tidak valid";
    }

    if (tahun < 1900 || tahun > 2200) {
        return "Tahun tidak valid";
    }

    return `${hari} ${namaBulan} ${tahun}`
}

console.log(tanggal(31, 12, 1900));



