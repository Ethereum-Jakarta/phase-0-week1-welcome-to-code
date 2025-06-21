/*
tujuan:kita akan membandingkan angka 
input:5,8
output:true,karena angka ke 2 lebih besar dari angka pertama
langkah-langkah:
1.kita siapkan mesin atau tempat untuk mengolahnya terlebih dahulu/function;
2.setelah itu kita siapkan 2 wadahnya juga di mesinnya/functionnya yaitu 2 parameter
3.kita langsung proses aja,kita menggunakan kondisi
4.kita tunggu sampai selesai/keluar,yaitu kita return antara true or false
5.setelah selesai semua,kita proses keluarkan yaitu memanggil fungsinya
6.selesai
*/
function bandingkanAngka(angka1, angka2){
    if(angka2 === angka1){
        return -1;
    }else if(angka2 > angka1){
        return true;
    }else{
        return false;
    }
}
console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));