// soal 4
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// looping kelipatan 3
console.log('kelipatan 3')
for ( let i= 1; i <= 100; i++) {
    if ( i % 3 === 0) 
        console.log(i);
} 

// looping kelipatan 6
console.log('kelipatan 6')
for ( let i = 1; i <= 100; i++) {
    if ( i % 6 === 0)
        console.log(i);
}

// looping kelipatan 10
console.log('kelipatan 10')
for ( let i = 1; i <= 100; i++){
    if ( i % 10 === 0 )

        console.log(i);
}
console.log('SELESAI')