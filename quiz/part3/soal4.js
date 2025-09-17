    // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
    // Pada 3 perulangan baru ini periksa setiap angka counter:

    // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
    // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
    // "3 kelipatan 3"dan seterusnya.

console.log("Kelipatan 3");
for (let i = 1; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log(`${i} kelipatan 3`);
    }
}


console.log("\nKelipatan 6");
for (let j = 1; j <= 100; j+=5) {
    if (j % 6 === 0) {
        console.log(`${j} kelipatan 6`);
    }
}


console.log("\nKelipatan 10");
for (let x = 1; x <= 100; x+=9) {
    if (x % 10 === 0) {
        console.log(`${x} kelipatan 10`);
    }
}
