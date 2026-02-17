# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut

## Soal 1:

```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//soal 1
/* pemain ditunjukkan halaman awal game
kemudian pemain diminta untuk mengisi nama
jika pemain tidak mengisi nama, akan ada peringatan dari sistem berupa "nama wajib diisi" 
setelah mengisi nama, pemain akan diminta untuk memilih peran
jika pemain tidak memilih peran, akan ada peringatan "Pilih peranmu untuk memulai game"
setelah pemain memilih nama dan peran, sistem akan menampilkan respon yang berbeda sesuai peran yang dipilih pemain.
jika pemain memilih peran ksatria sistem akan menampilkan "Halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu"
jika pemain memilih peran tabib sistem akan menampilkan "Halo tabib ${nama}, kamu akan membantu temanmu yang terluka"
jika pemain memilih peran penyihir sistem akan menampilkan "Halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu"
**/

// soal 2
/* sistem akan mengubah integer (bulan) menjadi string (nama bulan) menggunakan switch case
pada kasus nomor bulan itu 1 maka akan diubah menjadi januari
begitu juga seterusnya sampai pada nomor bulan 12 yang akan diubah menjadi desember
pada kasus angka kurang dari 1 atau lebih dari 12 default akan menampilkan peringatan "Bulan tidak valid"
**/

let nama = "",
  peran = "";

//code disini gunakan console.log untuk outputnya

let peran, nama;
peran = ["Ksatria", "Tabib", "Penyihir"];
nama = "ardi";
peran = peran[0];
if (nama === undefined) {
  console.warn("Nama harus diisi!");
} else if (peran === undefined) {
  console.warn("Peran harus dipilih!");
} else {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  if (peran === "Ksatria") {
    console.log(
      `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`,
    );
  } else if (peran === "Tabib") {
    console.log(
      `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`,
    );
  } else if (peran === "Penyihir") {
    console.log(
      `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`,
    );
  }
}
```

## Soal 2

```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
```
let tanggal = 12; 
let bulan = 2; 
let tahun = 2001; 

let namaBulan;

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
    console.log("Bulan tidak valid");
    namaBulan = null;
}

if (namaBulan !== null) {
  console.log(`${tanggal} ${namaBulan} ${tahun}`);
}

---

video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

_sisanya kalian googling aja ya ges yak_
