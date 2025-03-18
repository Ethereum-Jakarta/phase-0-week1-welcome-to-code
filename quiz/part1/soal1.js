// soal 1
//Peran Ksatria, Tabib, dan Penyihir
let nama = "Aidil", peran = "Admin";


if (nama === "" || peran === "") {
    console.log("Nama dan peran harus diisi!");
  } else {
    switch (peran) {
      case "Ksatria":
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
        break;
      case "Tabib":
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
        break;
      case "Penyihir":
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        break;
      default:
        console.log(`Halo ${nama}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
  }
  
  console.log("");

//soal 2

let tanggal = 1; 
let bulan = 2;
let tahun = 2010;

const namabulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

if (tanggal < 1 || tanggal > 31) {

    console.error("Tanggal harus antara 1 dan 31");

  } else if (tahun < 1900 || tahun > 2200) {

    console.error("Tahun harus antara 1900 dan 2200");

  } else {
    
    console.log(`${tanggal} ${namabulan[bulan - 1]} ${tahun}`);
  }

    console.log("");
