// Problem buatlah bintang seperti berikut
let input = 5
let pola = ""

for (let i = 0; i <= input; i++) {
    for (let j = 0; j < i; j++) {
        pola += "*"
    }
    pola += "\n"
}
console.log(pola)
//hasilnya
//*
//**
//***
//****
//*****