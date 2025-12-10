// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

let input = 9;
for (let i = 1; i <= input; i++) {
    let bintang = ""
    for (let j = 1; j <= i; j++) {
        bintang += "*"
    }
    console.log(bintang)
}