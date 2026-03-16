//hasilnya
//*
//**
//***
//****
//*****
let input = 5
let s=''

for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
       s+=`*`
    }
   s+=`\n`
}
console.log(s)