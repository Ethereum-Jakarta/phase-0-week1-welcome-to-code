let input = 5;
let patern = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    patern += "*";
  }
  patern += "\n";
}
console.log(patern);
