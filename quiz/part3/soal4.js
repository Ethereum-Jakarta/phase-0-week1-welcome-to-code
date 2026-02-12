// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Perulangan dengan pertambahan 2, cek kelipatan 3
let i = 1;
while (i <= 100) {
    if (i % 3 === 0) {
        console.log(i + " kelipatan 3");
    }
    i += 2; // Counter bertambah 2
}

console.log("\n");

// Perulangan dengan pertambahan 5, cek kelipatan 6
let j = 1;
while (j <= 100) {
    if (j % 6 === 0) {
        console.log(j + " kelipatan 6");
    }
    j += 5; // Counter bertambah 5
}

console.log("\n");

// Perulangan dengan pertambahan 9, cek kelipatan 10
let k = 1;
while (k <= 100) {
    if (k % 10 === 0) {
        console.log(k + " kelipatan 10");
    }
    k += 9; // Counter bertambah 9
}
