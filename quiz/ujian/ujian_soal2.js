// SOAL 2

/*

Problem :
- Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
- Function akan me-return kata yang dibalik. 
- Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

*/

function balikKata(kata) {
    return kata.split('').reverse().join('');
}

// Test Cases
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));