// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let s = '';
for(let i = 0; i <= input; i++){
  for(let j = 0; j < i; j++){
    s += '*'
  }
  s += '\n'
}
console.log(s)