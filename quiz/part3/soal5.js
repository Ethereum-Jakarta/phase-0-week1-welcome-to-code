`
let pattern = "";
for (let i = 0; i < 5; i++) {           
  for (let j = 5; j > i; j--) {
    pattern += " ";
}
  for (let k = 0; k < i;k++){ 
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern); 
`

let pattern = "";
for (let i = 1; i <= 5; i++) {           
  for (let j = 1; j <= i; j++) {        
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
