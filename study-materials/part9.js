// BELAJAR OBJECT
const tesObject = {
  // key and value
  nama: "Tegar",
  kelas: "Phase-0",
  hobby: ["Tidur", "Macul", "Salto"],
  size: {
    kaki: "29",
    pinggang: "28",
    badan: "L",
    tinggi: "172cm",
  },
};
console.log(tesObject.nama);
console.log(tesObject.hobby[1]);

let ambilSize = tesObject.size;
console.log(ambilSize);

// menggunakan looping object
for (const key in tesObject) {
  console.log(`${key} : ${tesObject[key]}`);
}

for (const key in tesObject) {
  console.log(`${key} : ${tesObject[key]}`);
}



