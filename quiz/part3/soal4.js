//algoritma
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
//code 
for (let i = 1; i <= 100; i += 2) {
    let hasil = '';
    if (i % 3 === 0) {
        hasil += `${i} adalah kelipatan 3`;
    }
    else {
        hasil += i;
    }
    console.log (hasil)
}

console.log ('')

//loop 2

for (let i = 1; i <= 100; i += 5) {
    let hasil = ''
    if (i % 6 === 0) {
        hasil += `${i} adalah kelipatan 6`;
    }
    else {
        hasil += i;
    }
    console.log (hasil);
}

console.log ('')
//loop ketiga

for (let i = 1; i <= 100; i += 9) {
    let hasil = '';
    if (i % 10 === 0) {
        hasil += `${i} adalah kelipatan 10`;
    }
    else {
        hasil += i;
    }
    console.log (hasil)
}