// while()
// for()

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let name = "tegar";
// // method length hanya berlaku untuk string dan array
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// membalikkan kata tanpa method reverse
// let nama = "agus";
// let result = "";
// for (let i = nama.length - 1; i >= 0; i--) {
//   // result = result + nama[i]
//   result += nama[i];
// }
// console.log(result);

// NESTED LOOP

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(j);
//   }
//   console.log("");
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(j);
//   }
//   console.log("");
// }

// COUNTER pada LOOP
let i = 1; // i adalah counter nya

while(i < 100) {
  console.log(i);
  i += 2 // counter nya nambah sesuai jumlah
}

// Menggabungkan dengan IF statement
while (i < 10) {
  // cari ganjil atau genap
  if (i % 2 === 0) {
    console.log(`angka : ${i} = genap`);
  } else {
    console.log(`angka : ${i} = ganjil`);
  }
  i++;
}

// problem fizzbuzz
// kelipatan 3 = fizz
// kelipatan 5 = buzz
// kelipatan 3 dan 5 = fizzbuzz
let fizzBuzz = 50
for (let i = 1; i < fizzBuzz; i++) {
  if (i % 15 === 0) {
    console.log(`angka ${i} = FIZZBBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`angka ${i} = fizz`);
  } else if (i % 5 === 0) {
    console.log(`angka ${i} = buzz`);
  } else {
    console.log(i);
  }
}
