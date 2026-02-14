// Problem buatlah bintang seperti berikut

//hasilnya
//*
//**
//***
//****
//*****
//let input = 5
let bintang;
for(let i=0; i<=5; i++){
    for(let j=1; j <= i; j++){
        bintang += '*'
    }
    bintang += '\n'
}
console.log(bintang)