let word = 'wow JavaScript is so cool';
word = word.split("");

let exampleFirstWord = "";

word.forEach((char)=>{
    exampleFirstWord = exampleFirstWord + char;  
})

console.log('First Word: ' + exampleFirstWord);