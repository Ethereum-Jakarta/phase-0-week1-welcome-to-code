// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log('loop 1');
for(let i = 1; i <= 100; i += 2){
    if(i % 3 === 0 ){
        console.log(i + ' kelipatan 3');
    }
        
}
// 


let i = 1;
console.log('loop 2');
while (i <= 100){
    if(i % 6 === 0){
        console.log(i + ' kelipatan 6');
    }
    i += 5;
}

// 
let a = 1;
console.log('loop 3');
do {
    if (a % 10 === 0){
        console.log(a + ' kelipatan 10');
    }
    a += 9;
}while (a <= 100);