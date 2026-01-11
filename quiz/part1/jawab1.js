// Soal 1
let nama = "Anton";
let peran = "";

if (nama === "") {
    console.log ("Nama harus diisi!")
} else if (peran === "") {
    console.log ("Pilih Peranmu untuk memulai game!")
} else if (peran === "Ksatria") {
    console.log (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log (`Halo ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log (`Halo ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log (`Peran yang dipilih tidak ada, kamu akan menjadi bot`)
}

//Soal 2
let tanggal = 12;
let bulan = 3;
let tahun = 1999;

switch (bulan) {
    case 1:
        console.log ("Januari");
        break;
    case 2:
        console.log ("Februari");
        break;
    case 3:
        console.log ("Maret");
        break;
    case 4:
        console.log ("April");
        break;
    case 5:
        console.log ("Mei");
        break;
    case 6:
        console.log ("Juni");
        break;
    case 7:
        console.log ("Juli");
        break;
    case 8:
        console.log ("Agustus");
        break;
    case 9:
        console.log ("September");
        break;
    case 10:
        console.log ("Oktober");
        break;
    case 11:
        console.log ("November");
        break;
    case 12:
        console.log ("Desember");
        break;
}