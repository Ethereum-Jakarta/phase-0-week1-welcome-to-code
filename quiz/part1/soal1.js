// algoritma
//jika peran yang dipilih adalah 'Ksatria' maka tampilkan teks untuk kesatria
//begitu juga untuk tabib dan penyihir
//lalu jika nama atu perannya tidak ada maka beri peringatan
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "ikbal"
let peran = "";

//code disini gunakan console.log untuk outputnya

if (peran === 'Ksatria' && nama !== '') {
    console.log (`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
}
else if (peran === 'Tabib' && nama !== '') {
    console.log (`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
}
else if (peran === 'Penyihir' && nama !== '') {
    console.log (`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
}
else if (nama === '' || nama === undefined) {
    console.log ('nama wajib diisi');
}
else if (peran === undefined || peran === '') {
    console.log ("Pilih Peranmu untuk memulai game")
}
else {
    console.log ('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
}
