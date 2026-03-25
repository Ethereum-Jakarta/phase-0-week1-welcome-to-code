// SOAL 5: Bintang Asteriks

/*

Problem : 
Buatlah pola bintang seperti berikut dari hasil looping.

*
**
***
****
*****

*/

let bintangAsterisk = '';

for (let q = 1; q <= 5; q++) {
    for (let r = 1; r <= q; r++) {
        bintangAsterisk += '*';
    }

    bintangAsterisk += '\n';
}

console.log(bintangAsterisk);