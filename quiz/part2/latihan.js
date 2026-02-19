// // // for (let i = 1; i <= 100; i++) {
// // //   if (i % 7 === 0 && i % 4 === 0) {
// // //     console.log("FOURSEVEN");
// // //   } else if (i % 7 === 0) {
// // //     console.log("SEVEN");
// // //   } else if (i % 4 === 0) {
// // //     console.log("FOUR");
// // //   } else console.log(i);
// // // }

// // const matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // for (let row = 0; row < 3; row++) {
// //   // Loop baris
// //   for (let col = 0; col < 3; col++) {
// //     // Loop kolom
// //     console.log(matrix[row][col]);
// //   }
// // }

// // let data = [];
// data = 3;
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`angka kamu ${data} adalah bilangan prima`);
//     break;
//   }
// }

// for (let k = 0; k < data.length; k++) {
//   console.log(data[k]);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i === 1) {
//     console.log(i);
//     continue;
//   }
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (!isPrime) {
//     console.log(i);
//   }
// }

let data = 6;
let isPrime = true;

if (data <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < data; i++) {
    if (data % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`Data kamu ${data} adalah bilangan prima`);
} else {
  console.log(`Data kamu ${data} bukan bilangan prima`);
}
