// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//Code 
//Counter 1 (2)
console.log("\nCounter Pertama (2)\n")
for (let i = 2; i <= 100; i++) {
    if(i%2===0){
        console.log(i)
    }else if(i%3===0){
        console.log(`${i} kelipatan 3`)
    }
}

//Counter 2 (5)
console.log("\nCounter Kedua (5)\n")
for (let i = 5; i <= 100; i++) {
    if(i%5===0){
        console.log(i)
    }else if(i%6===0){
        console.log(`${i} kelipatan 6`)
    }
}

//Counter 3 (9)
console.log("\nCounter Ketiga (9)\n")
for (let i = 9; i <= 100; i++) {
    if(i%9===0){
        console.log(i)
    }else if(i%10===0){
        console.log(`${i} kelipatan 10`)
    }
}

//Output
/*
Counter Pertama (2)

2
3 kelipatan 3
4
6
8
9 kelipatan 3
10
12
14
15 kelipatan 3
16
18
20
21 kelipatan 3
22
24
26
27 kelipatan 3
28
30
32
33 kelipatan 3
34
36
38
39 kelipatan 3
40
42
44
45 kelipatan 3
46
48
50
51 kelipatan 3
52
54
56
57 kelipatan 3
58
60
62
63 kelipatan 3
64
66
68
69 kelipatan 3
70
72
74
75 kelipatan 3
76
78
80
81 kelipatan 3
82
84
86
87 kelipatan 3
88
90
92
93 kelipatan 3
94
96
98
99 kelipatan 3
100

Counter Kedua (5)

5
6 kelipatan 6
10
12 kelipatan 6
15
18 kelipatan 6
20
24 kelipatan 6
25
30
35
36 kelipatan 6
40
42 kelipatan 6
45
48 kelipatan 6
50
54 kelipatan 6
55
60
65
66 kelipatan 6
70
72 kelipatan 6
75
78 kelipatan 6
80
84 kelipatan 6
85
90
95
96 kelipatan 6
100

Counter Ketiga (9)

9
10 kelipatan 10
18
20 kelipatan 10
27
30 kelipatan 10
36
40 kelipatan 10
45
50 kelipatan 10
54
60 kelipatan 10
63
70 kelipatan 10
72
80 kelipatan 10
81
90
99
100 kelipatan 10
*/