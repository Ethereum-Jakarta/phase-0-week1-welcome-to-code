// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    if (i % 3 === 0) {
      console.log(i + " kelipatan 3");
    }
  }
}

for (let j = 1; j < 100; j++) {
  if (j % 5 === 0) {
    if (j % 6 === 0) {
      console.log(j + " kelipatan 6");
    }
  }
}

for (let k = 1; k < 100; k++) {
  if (k % 9 === 0) {
    if (k % 10 === 0) {
      console.log(k + " kelipatan 10");
    }
  }
}
