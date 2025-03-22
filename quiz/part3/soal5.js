// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let segitiga=''
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        segitiga += '*';
    }
    segitiga += '\n'
}
console.log(segitiga)