// Problem buatlah bintang seperti berikut
let input = ""
//hasilnya
//*
//**
//***
//****
//*****
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        input += "*";
    }
    input += "\n";
}
console.log(input);