// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

//Code
let pattern="";
let masukan = 5;
for(let baris=1; baris<=masukan; baris++){
    for(let kolom=1; kolom<=baris; kolom++){
        pattern+="*";
    }
    pattern+="\n";
}
console.log(pattern)

//Code
//*
//**
//***
//****
//*****
