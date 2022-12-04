const data = require("./data.js")

const games = data.split("\n")

let myTotalScore = 0

// ELFS -----
// A = Rock
// B = Paper
// C = Scissors

// ME -----
// X = Rock
// Y = Paper
// Z = Scissors

// PART 1

games.forEach((game, index) => {
  const [elf, me] = game.split(" ")

  if (me === "X") myTotalScore += 1
  if (me === "Y") myTotalScore += 2
  if (me === "Z") myTotalScore += 3

  if (me === "X" && elf === "C") myTotalScore += 6
  if (me === "Y" && elf === "A") myTotalScore += 6
  if (me === "Z" && elf === "B") myTotalScore += 6

  if ((me === "X" && elf === "A") || (me === "Y" && elf === "B") || (me === "Z" && elf === "C")) myTotalScore += 3
})

console.log("part one answer:", myTotalScore)

// PART 2

let myTotalScore2 = 0

function chooseCorrectHand(elf, me) {
  if (me === "X") {
    // lose
    if (elf === "A") return "Z"
    if (elf === "B") return "X"
    if (elf === "C") return "Y"
  }
  if (me === "Y") {
    // Draw
    if (elf === "A") return "X"
    if (elf === "B") return "Y"
    if (elf === "C") return "Z"
  }
  if (me === "Z") {
    // Win
    if (elf === "A") return "Y"
    if (elf === "B") return "Z"
    if (elf === "C") return "X"
  }
}

games.forEach((game, index) => {
  const [elf, meChoise] = game.split(" ")

  const me = chooseCorrectHand(elf, meChoise)

  if (me === "X") myTotalScore2 += 1
  if (me === "Y") myTotalScore2 += 2
  if (me === "Z") myTotalScore2 += 3

  if (me === "X" && elf === "C") myTotalScore2 += 6
  if (me === "Y" && elf === "A") myTotalScore2 += 6
  if (me === "Z" && elf === "B") myTotalScore2 += 6

  if ((me === "X" && elf === "A") || (me === "Y" && elf === "B") || (me === "Z" && elf === "C")) myTotalScore2 += 3
})

console.log("part two answer:", myTotalScore2)
