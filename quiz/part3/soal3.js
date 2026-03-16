// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for(let i=1; i<=100; i++){
    let counter;
    if(i % 2 === 0){
        counter = 'genap'
    } else{
        counter = 'ganjil'
    }
    console.log('perulangan ke ' + i + ' adalah: ' + counter)
}