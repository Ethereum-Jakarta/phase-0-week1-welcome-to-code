function konversiMenit(menit) {
  // you can only write your code here!
  let hour = Math.floor(menit / 60);
  let minutes = menit % 60;
  let formattedMinutes = minutes.toString().padStart(2, "0");
  return `${hour}:${formattedMinutes}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
