
//Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut

let pattern = "";
for(let i = 1 ; i <= 5 ; i++) {
    for(let j = 1 ; j <= i ; j++) {
        pattern += "*"; 
         }
    pattern += "\n";
    }
console.log(pattern);

//hasilnya
//*
//**
//***
//****
//*****

