// Problem buatlah bintang seperti berikut
let input = 5;
let bintang = "";

for (let i = 0; i <= input; i++) {
  for (let j = 0; j <= i; j++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
//hasilnya
//*
//**
//***
//****
//*****
