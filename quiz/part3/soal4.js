// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Perulangan dengan counter 2");
for(let i=1; i<=100; i+=2){
    if(i % 3 === 0){
        console.log(i + " kelipatan 3 ");
    } else{
        console.log(i);
    }
}
console.log("");
console.log("Perulangan dengan counter 5");
for(let j=1; j <= 100; j+=5){
    if (j % 6 === 0){
        console.log(j + " kelipatan 6");
    }else{
        console.log(j);
    }
}
console.log("");
console.log("Perulangan dengan counter 9")
for(let k=1; k <= 100; k+=9){
    if (k % 10 === 0){
        console.log(k + " kelipatan 9");
    }else{
        console.log(k);
    }
}
// for (let i = 1; i <= 100; i++) {
//   if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
//     console.log("FOURSEVEN");
//   } else if (i % 4 === 0) {
//     console.log("FOUR");
//   } else if (i % 7 === 0) {
//     console.log("SEVEN");
//   } else {
//     console.log(i);
//   }
// }