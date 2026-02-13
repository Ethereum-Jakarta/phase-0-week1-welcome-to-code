// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for(let i = 0; i < input; i++){
    let container = "";
    for(let x = 0; x <=i; x++){
        container+='*';
    }
    console.log(container);
}