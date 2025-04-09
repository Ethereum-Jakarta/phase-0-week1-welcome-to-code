// cara membuat variable
var a = "a";
let b = "b";
const c = "c";

// variable bisa menampung tipe data string (text), integer/number, boolean, array, object
let nama = "john"; // string
let umur = 22; // number
let apakahBenar = true; // boolean
let uang = 5.5; // number koma

// operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(`pertambahan ${angka1} + ${angka2} => ${angka1 + angka2}`);
console.log(`pengurangan ${angka1} - ${angka2} => ${angka1 - angka2}`);
console.log(`perkalian ${angka1} * ${angka2} => ${angka1 * angka2}`);
console.log(`pembagian ${angka1} / ${angka2} => ${angka1 / angka2}`);
console.log(`modulo/sisa bagi ${angka1} % ${angka2} => ${angka1 % angka2}`);

// belajar meng-assign
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); // 200

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); // 0.5

// string bisa di tambah selain itu tidak bisa
let firstName = "john";
let lastName = "wick";
let username = firstName + " " + lastName;
console.log(username);
console.log(firstName - lastName); // NaN

// alur pembacaan code
// baca dari kiri ke kanan, atas ke bawah
let number = 20;
number = 20 + 10; // 30
console.log(number + 10); // 40

number = false;
console.log(number + 10);
// kenapa false + 10 tetap menjadi 10? karna false = 0, true = 1
console.log(true + 10);
