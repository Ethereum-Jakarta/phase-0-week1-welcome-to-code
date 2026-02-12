// Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;

for (let x = 1; x <= input; x++) {
    let bintang = "";
    for (let y = 1; y <= x; y++) {
        bintang += "*"
    } console.log(bintang);
}