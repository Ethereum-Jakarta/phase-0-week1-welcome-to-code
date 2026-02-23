// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// ==== ALGORITMA ====
// 1. Buat function bernama createStar() yang memiliki parameter input berupa jumlah bintang yanng ingin disusun
// 2. Buat for loop untuk membuat baris dari setiap kolom bintang
// 3. Buat for lop kedua untuk menciptakan kolom setiap bintang

function createStar(star) {
    for(let i = 1; i <= star; i++) {
        let bintang = '';
        for(let j = 1; j <= i; j++) {
            bintang += '*';
        }

        console.log(bintang);
    }
}

createStar(5);



