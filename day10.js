const data = 
`97
62
23
32
51
19
98
26
90
134
73
151
116
76
6
94
113
127
119
44
115
50
143
150
86
91
36
104
131
101
38
66
46
96
54
70
8
30
1
108
69
139
24
29
77
124
107
14
137
16
140
80
68
25
31
59
45
126
148
67
13
125
53
57
41
47
35
145
120
12
37
5
110
138
130
2
63
83
22
79
52
7
95
58
149
123
89
109
15
144
114
9
78`

const dataArray = data.split('\n');
let current = 0;
let plus1 = 0;
let plus2 = 0;
let plus3 = 0;


dataArray.sort(function(a,b) { return a - b})

dataArray.forEach( function ( number, index) {
    
    let n = parseInt(number)
    if ( n - current == 1) { plus1++; console.log(`+1`) }
    if ( n - current == 2) { plus2++ }
    if ( n - current == 3) { plus3++; console.log(`+3`) }
    console.log(`${n} current: ${current}`)
    console.log(`+1 : ${plus1}`)
    console.log(`+3 : ${plus3}`)

    current = n;
    console.log(`-----------------------`)
})

console.log(`+1 : ${plus1}`)
console.log(`+2 : ${plus2}`)
console.log(`+3 : ${plus3}`)
console.log(`answer: ${plus1 * (plus3 +1)}`)

// PART 1 1920