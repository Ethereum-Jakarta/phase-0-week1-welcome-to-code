/*
tujuan:mengganti input yang awalnya angka untuk bulan,ganti dengan nama bulannya
input:12-1-2025
ouput:12 januari 2025
langkah-langkah:
1.sipkan 3 tempat variable untuk menyimpan tanggal,bulan,tahun untuk inputnya
2.kita cek kondisinya menggunakan switch case untuk mengubah input bulan angka menjadi nama bulannya
3.selesai
*/

let tanggal=19;
let bulan=7;
let tahun=2005;

switch(bulan){
    case 1:
        bulan="Januari";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 2:
        bulan="Februari";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 3:
        bulan="Maret";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 4:
        bulan="April";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 5:
        bulan="Mei";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 6:
        bulan="Juni";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 7:
        bulan="July";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 8:
        bulan="Agustus";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 9:
        bulan="September";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 10:
        bulan="Oktober";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 11:
        bulan="November";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    case 12:
        bulan="Desember";
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;                                            
}