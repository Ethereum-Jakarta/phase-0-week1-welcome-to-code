function konversiMenit(menit) {
    let menitBaru = menit;
    let hasilJam = Math.floor(menitBaru/60);
    let hasilMenitModulo = menitBaru % 60;
    let hasilMenit = hasilMenitModulo < 10 ? "0" + hasilMenitModulo : hasilMenitModulo;
    return(`${hasilJam}:${hasilMenit}`);
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00