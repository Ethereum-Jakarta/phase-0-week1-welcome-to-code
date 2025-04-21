// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for (input = 1; input <= 5; input++) {
    let stars = "";
    for (let j = 1; j <= input; j++) {
        stars += "*";
    }
    console.log(stars);
}
