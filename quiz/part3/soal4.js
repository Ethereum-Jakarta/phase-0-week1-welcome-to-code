// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 0; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log(i, "kelipatan 3")
    }
}

for (let y = 0; y <= 100; y+=5) {
    if (y % 6 === 0) {
        console.log(y, "kelipatan 6")
    }
}

for (let x = 0; x <= 100; x+=5) {
    if (x % 6 === 0) {
        console.log(x, "kelipatan 10")
    }
}