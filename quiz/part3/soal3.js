//algoritma
//memeriksa angka dari 1 - 100 apakah ganjil atau genap
//code 
for (let i = 1; i <= 100; i++) {
    let hasil = '';
    if (i % 2 === 0) {
        hasil += 'Genap';
    }
    else {
        hasil += 'Ganjil'
    }
    console.log (hasil)
}