//soal 1
//membandingkan dua angka
//buat function
function bandingkAngka(num1, num2) {
    let hasil;
    if (num1 === num2) {
        hasil = -1;
    }
    else if (num1 < num2) {
        hasil = true;
    }
    else {
        hasil = false;
    }
    return hasil
}
//memanggil output
console.log (bandingkAngka(10, 6))

//soal 2
//membuat function untuk membalik kata
//membuat function
function balikKata(kata) {
    let hasil = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i];
    }
    return hasil;
}

console.log (balikKata('prabowo'))

//soal 3
//membuat function konversi detik ke menit
//membuat function
function konversiMenit(detik) {
    let menit = (detik - (detik % 60)) / 60;
    let sisaDetik = detik % 60;
    return menit + ':' + sisaDetik
}
console.log (konversiMenit(60))