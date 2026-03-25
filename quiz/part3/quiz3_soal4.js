// SOAL 4: Counter Kelipatan

/*

Problem :
- Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
- Pada 3 perulangan baru ini periksa setiap angka counter:
  - Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa.
  - Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, 
    tuliskan: "3 kelipatan 3" dan seterusnya.

*/

console.log('Pertambahan 2');

for (let n = 1; n <= 100; n += 2) {
    if (n % 3 === 0) {
        console.log(`${n} adalah kelipatan 3`);
    } else {
        console.log(n);
    }
}

console.log('Pertambahan 5');

for (let o = 1; o <= 100; o += 5) {
    if (o % 6 === 0) {
        console.log(`${o} adalah kelipatan 6`);
    } else {
        console.log(o);
    }
}

console.log('Pertambahan 9');

for (let p = 1; p <= 100; p += 9) {
    if (p % 10 === 0) {
        console.log(`${p} adalah kelipatan 10`);
    } else {
        console.log(p);
    }
}