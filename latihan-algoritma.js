function cekGenapGanjil (angka) {
    if (angka % 2 === 0) {
        return "Genap"
    } else {
        return "Ganjil"
    }
}

console.log(cekGenapGanjil(5));
console.log(cekGenapGanjil(8));