/*
tujuan:membuat bintang urut dari jumlahnya 1 sampai jumlahnya 5
input:*
output:*
       **
       ***
       ****
       *****
langkah-langkah:
1.kita siapkan 1 variable untuk angka sampai berapa bintangnya;
2.kita lakukan looping menggunakan for
3.setelah itu kita ganti variable nya menggunakan simbol *
4.selesai       
*/
let input = 5;
for(let i=1;i <=input;i++){
    let baris="";
    for(let j=1;j<=i;j++){
        baris +="*";
    }
    console.log(baris);
}

