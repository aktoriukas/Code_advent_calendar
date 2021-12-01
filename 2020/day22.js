let data = 
`Player 1:
18
19
16
11
47
38
6
27
9
22
15
42
3
4
21
41
14
8
23
30
40
13
35
46
50

Player 2:
39
1
29
20
45
43
12
2
37
33
49
32
10
26
36
17
34
44
25
28
24
5
48
31
7`

// data = `Player 1:
// 9
// 2
// 6
// 3
// 1

// Player 2:
// 5
// 8
// 4
// 7
// 10`

let players = data.split('\n\n')

let player1 = {};
let player2 = {};
let gameOver = false;
let part1 = 0;

player1.cards = players[0].split('\n');
player1.cards.shift()

player2.cards = players[1].split('\n');
player2.cards.shift()

while (!gameOver) {
    p1_playingCard = Number(player1.cards[0])
    p2_playingCard = Number(player2.cards[0])

    if (p1_playingCard > p2_playingCard) {

        player1.cards.push(p1_playingCard)
        player1.cards.push(p2_playingCard)

        player2.cards.shift()
        player1.cards.shift()
    } else {
        player2.cards.push(p2_playingCard)
        player2.cards.push(p1_playingCard)

        player2.cards.shift()
        player1.cards.shift()
    }

    if (player1.cards.length === 0 || player2.cards.length === 0) {
        gameOver = true;
    }
}

let winner = {};

if ( player1.cards.length != 0) { winner = player1 }
if ( player2.cards.length != 0) { winner = player2 }
console.log('===================')

let multiplier = 1;
for (let i = winner.cards.length; i > 0; i--) {
    console.log(winner.cards[i-1])
    part1 = part1 + (winner.cards[i-1] * multiplier)
    multiplier++;
}
console.log(`PART 1 answer: ${part1}`)

// PART 1: 32824