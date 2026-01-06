// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
let bintang=''
for(var i=0;i<input;i++) {
  for(var u=0;u<i;u++) {
    bintang += '*'
  }
  bintang += '\n'
}
console.log(bintang)
