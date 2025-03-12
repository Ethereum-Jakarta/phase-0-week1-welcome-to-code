// # Conditional Statement | Part 1

// oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

// singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

// yak Buka aja W3school dan kerjakan soal soal berikut

// ## Soal 1:
// ```js
// // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// // Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// // yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// // bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// // Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// // peran serta mengeluarkan respon sesuai isi variabel tersebut.
// //ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// //halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// //halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// //halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// //tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// //tips belajar penggu   naan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// //tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// // algoritma
// //isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = 'Roderick'
let peran = 'Penyihir'

//code disini gunakan console.log untuk outputnya

if(!nama){
    console.log('Isi nama lo dulu')
} else if(peran === 'Ksatria'){
    console.log(`Halo ${nama}, Jadilah ksatria yang terhormat dan bakar api yang membara!`)
}else if(peran === 'Tabib'){
    console.log(`Halo ${nama}, Sembuhkan prajurit kita yang terluka`)
}else if(peran === 'Penyihir'){
    console.log(`Halo ${nama}, Berhati-hatilah dengan Assasin, dan lakukan burst ke musuh`)
}else{
    console.log(`Woi udah nolep minimal ada peran lah, jangan jadi hama kerajaan`)
}

// ## Soal 2
// ```js
// // Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// // Gunakan switch case untuk kasus ini!

// // Contoh:

// // let hari = 21; let bulan = 1; let tahun = 1945;

// // Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// //tips gunakan keyword ini di google "conditional switch case javascript"
// //dan mulailah membaca dan mencontek di stackoverflow xixixi

// // let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// // let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// // let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let tanggal = 1
let bulan = 12
let tahun = 2024

// //code switch case kamu disini

switch(true){
    case(tanggal < 1 || tanggal > 31):
    console.log(`Masukkan tanggal dari 1-31`)
    break

    case(bulan < 1 || bulan > 12):
    console.log(`Masukkan bulan dari 1-12`)
    break

    case(tahun < 1900 || tahun > 2200):
    console.log(`Masukkan tahun dari 1900-2200`)
    break

    default:
    switch(bulan){
        case 1: bulan = 'Januari'
        break
        case 2: bulan = 'Februari'
        break
        case 3: bulan = 'Maret'
        break
        case 4: bulan = 'April'
        break
        case 5: bulan = 'Mei'
        break
        case 6: bulan = 'Juni'
        break
        case 7: bulan = 'Juli'
        break
        case 8: bulan = 'Agustus'
        break
        case 9: bulan = 'September'
        break
        case 10: bulan = 'Oktober'
        break
        case 11: bulan = 'November'
        break
        case 12: bulan = 'Desember'
    }
    console.log(`${tanggal} ${bulan} ${tahun}`)
}


// ```

// ---
// video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

// [Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

// *sisanya kalian googling aja ya ges yak*
