var jawa1 = 5000;

if (jawa1 >= 1000) {
    console.log("Jumlahnya besar");
} else {
    console.log("Jumlahnya kecil");
}

console.error("Terjadi kesalahan!");
console.warn("Terjadi kesalahan!");
console.info("Terjadi kesalahan!");


const users = [
    { nama: "Budi", umur: 25 },
    { nama: "Ani", umur: 23 }
];
console.table(users);

console.group('userdetail');
console.log('nama: budi');
console.log('umur: 10');
console.groupEnd();

console.time("Loop");
for(let i = 0; i < 1000000; i++) {
    // proses
}
console.timeEnd("Loop");


