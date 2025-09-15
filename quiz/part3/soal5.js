// Problem buatlah bintang seperti berikut


for (let input = 1; input <= 5; ++input) { 
    let baris = '';
    for (let column = 1; column <= input; ++column) {
        baris += '*'
    }
    console.log(baris)
};
//hasilnya
//*
//**
//***
//****
//*****