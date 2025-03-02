// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("kelipatan 3 pertambahan 2");
for (let i = 1; i <= 100; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}


console.log("kelipatan 6 pertambahan 5");
for (let x = 1; x <= 100; x+=5){
    if(x % 6 == 0){
        console.log(x);
    }
}

console.log("kelipatan 10 pertambahan 9");
for (let z = 1; z<= 100; z+=9){
    if(z % 10 == 0){
        console.log(z);
    }
}