// BELAJAR FUNCTION

function balikKata(kata) {
  // balikan sebagai pancingan agar dapat di tambah ke dalam param kata
  let balikan = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    balikan += kata[i];
  }
  return balikan;
}
console.log(balikKata("jeruk"));
console.log(balikKata("batam"));

function tambahHurufBesarSetelahSpasi(kata) {
  let hasil = "";
  for (let i = 0; i < kata.length; i++) {
    if (i === 0 || kata[i - 1] === " ") {
      hasil += kata[i].toUpperCase();
    } else {
      hasil += kata[i];
    }
  }
  return hasil;
}
console.log(tambahHurufBesarSetelahSpasi("abu bakar"));

// BELAJAR ARRAY

// mengakses array 1 dimensi

// menggunakan looping
let arr = [1, 3, 5, 7, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// mengakses array 2 dimensi
let arr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

// menggunakan looping
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr[i]);
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}

// kasus string
console.log("nolep mulai dari sini");
let nolep = [
  ["john", "wick", "ferdi", "sambo"],
  ["windah", "basudara", "team", "nolep"],
];
for (let i = 0; i < nolep.length; i++) {
  // console.log(nolep[i]);
  for (let j = 0; j < nolep[i].length; j++) {
    console.log(nolep[i][j]);
  }
}

let nolep2 = [
  ["john", "batam", "22 tahun"],
  ["windah", "depok", "11 tahun"],
];
for (let i = 0; i < nolep2.length; i++) {
  for (let j = 0; j < nolep2[i].length; j++) {
    if (j === 0) {
      console.log(`Nama : ${nolep2[i][j]}`);
    } else if (j === 1) {
      console.log(`Tinggal : ${nolep2[i][j]}`);
    } else {
      console.log(`Umur : ${nolep2[i][j]}`);
    }
  }
}
