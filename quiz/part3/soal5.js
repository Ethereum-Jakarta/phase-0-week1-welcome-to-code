//algoritma
//membuat pattern bintang pakai loop
//variabel
let input = 5;

//code
for (let i = 0; i < input; i++) {
    let hasil = ''
        for (let j = 0; j <= i; j++) {
            hasil += '*'
        }
    console.log (hasil)
}