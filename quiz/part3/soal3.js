/*
tujuan:urutan angka 1-100,dan kasih keterangan apakah angka tersebt ganjil/genap
input:1,2
output:ganjil,genap
langkah-langkah:
1.kita langsung lakukan perulangan dan kita simpan variable langsung di dalam loopingnya,kita mulai dari 1-100
2.stelah itu,kita cek kondisi nya apakah angka tersebut ganjil/genap,jika ganjil tulis ganjil,jika genap tulis genap
3.setelah itu kita coba panggil dari pertama menggunakan console.log
4.selesai
*/

for(let i=1;i <=100;i++){
    if(i % 2 ===0){
        console.log("Genap")
    }else{
        console.log("Ganjil");
    }
}

