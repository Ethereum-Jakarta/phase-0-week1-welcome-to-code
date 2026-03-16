// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//apabila angka counter adalah kelipata 3, maka tuliskan tiga

for (let angka = 1; angka <= 100; angka++) {
    if (angka % 21 === 0) {
        console.log(`angka ${angka} kelipatan 21`);
    } else if (angka % 3 === 0) {
        console.log(`angka ${angka} kelipatan 3`);
    } else if (angka % 7 === 0) {
        console.log(`angka ${angka} kelipatan 7`);
    } else {
        console.log(angka);
    }
}