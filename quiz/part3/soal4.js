// ## Soal 4. counter kelipatan
// // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// // Pada 3 perulangan baru ini periksa setiap angka counter:

// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3"dan seterusnya.

let kelipatan2 = "";
for (kelipatan2 = 1; kelipatan2 < 100; kelipatan2 += 2) {
  console.log(`${kelipatan2} kelipatan 2`);
}
console.log("=====================================");
let kelipatan5 = "";
for (kelipatan5 = 1; kelipatan5 < 100; kelipatan5 += 5) {
  console.log(`${kelipatan5} kelipatan 5`);
}
console.log("=====================================");
let kelipatan9 = "";
for (kelipatan9 = 1; kelipatan9 < 100; kelipatan9 += 9) {
  console.log(`${kelipatan9} kelipatan 9`);
}
