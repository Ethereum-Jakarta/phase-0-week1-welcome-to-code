// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("kelipatan 2 : ")
for (i=1;i<=100;i+=2){
    if (i % 3 == 0){
        console.log("3 kelipatan 3")
    } else {
        console.log(i)
    }
}
console.log('\n'+"kelipatan 5 : ")
for (o=1;o<=100;o+=5){
    if (o % 6 == 0){
        console.log("3 kelipatan 3")
    } else {
        console.log(o)
    }
}
console.log('\n'+"kelipatan 9 : ")
for (p=1;p<=100;p+=9){
    if (p % 10 == 0){
        console.log("3 kelipatan 3")
    } else {
        console.log(p)
    }
}