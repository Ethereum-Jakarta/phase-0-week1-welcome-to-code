// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//pertambahan counter 2

console.log("kelipatan 3 pertambahan 2");
for (let angka = 1; angka <= 100; angka += 2) {
    if (angka % 3 === 0) {
        console.log(`angka ${angka} kelipatan 3`);
    } 

}

//pertambahan counter 5

console.log("kelipatan 6 pertambahan 5");
for (let angka = 1; angka <= 100; angka +=5) {
    if (angka % 6 === 0) {
        console.log(`angka ${angka} kelipatan 6`);
    }
}

//pertambahan counter 9

console.log("kelipatan 10 pertambahan 9");
for (let angka = 1; angka <= 100; angka +=9) {
    if (angka % 10 === 0) {
        console.log(`angka ${angka} kelipatan 10`);
    }
}