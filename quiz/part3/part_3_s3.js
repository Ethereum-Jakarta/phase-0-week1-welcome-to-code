// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let x = 1; x <= 100; x++) {
    if (x % 2 === 0) {
        console.log( x + " " + "Genap" );
    }
        else {
            console.log( x + " " + "Ganjil" );
        }
    }  