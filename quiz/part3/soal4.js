/*
tujuan:mencari angka kelipatan 3,6,9 dari perulangan 1-100 dan kita buat 3 looping
input:3,6,9
output:(3,6,9,12,15),(6,12,18,24),(9,18,27,36)
langkah-langkah:
1.kita buat looping pertama yaitu mencari kelipatan3,kita buat variable didalamnya looping langsung dengan pertambahan counter 2;
2.setelah kita looping,kita cek kondisinya,apakah angka counter kelipatan 3 atau bukan
3.setelah itu kita lanjut buat looping ke dua,untuk mencari kelipatan 6
4.setelah itu kita cek juga kondisinya,apakah kelipatan 6 atau bukan
5.sama seperti no 1 dan 3
6.selesai
*/
for(let kelipatan3=1;kelipatan3 <=100;kelipatan3 +=2){
    if(kelipatan3 % 3 ===0){
        console.log(`Counter kelipatan 3 : ${kelipatan3}`);
    }
}
for(let kelipatan6=1;kelipatan6 <=100;kelipatan6 +=5){
    if(kelipatan6 % 6 ===0){
        console.log(`Counter kelipatan 6 : ${kelipatan6}`);
    }
}
for(let kelipatan10=1;kelipatan10 <=100;kelipatan10 +=9){
    if(kelipatan10 % 10 ===0){
        console.log(`Counter kelipatan 10 : ${kelipatan10}`);
    }
}