/*
tujuan:kita akan mengembalikkan suatu kalimat
input:"Super"
ouput:"repuS"
langkah-langkah:
1.kita siapkan mesinnya terlebih dahulu,yaitu fungsinya
2.kita siapkan 1 wada untuk di mesinnya,yaitu parameternya
3.setelah itu kita siapkan 2 tempat lagi,yang satu untuk memisahkan katanya,satu lagi kita siapkan untuk menyimpannya yaitu array kosong
4.kita cek lagi bahan bahan-bahannya menggunakan looping,
5.di dalam looping kita buat 1 variable untuk memprosesnya lagi untuk memisahkan per kata,membalikkan perkata,lalu kita gabungkan menjadi 1 kalimat
6.setelah itu kita masukkan ke dalam tempat menyimpannya
7.setelah itu kita tunggu sampai keluar,dan setelah kita keluar kita kembalikan hasilnya dan menggabungkannya
8.kita siapkan dengan memanggil fungsinya 
*/
function balikKata(kata){
    let kataDibalik=kata.split(" ");
    let hasilArray=[];

    for (const kataKata of kataDibalik) {
        const proses=kataKata.split("").reverse("").join("");
        hasilArray.push(proses);
    }
    return hasilArray.join(" ");
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS