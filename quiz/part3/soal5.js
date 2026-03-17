// Problem buatlah bintang seperti berikut
for (let i = 1; i <= 5; i++) { 
    let row = "1"; // Menyimpan pola bintang untuk setiap baris
    for (let j = 1; j <= i; j++) {
        row += "2"; // Tambahkan bintang ke dalam string
    }
    console.log(row); // Cetak pola bintang yang terbentuk
}
