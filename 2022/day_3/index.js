const data = require("./data.js")

const rucksacks = data.split("\n")

// PART 1

let prioritySum = 0

function split(str) {
  const index = str.length / 2
  const result = [str.slice(0, index), str.slice(index)]

  return result
}

rucksacks.forEach((sack) => {
  const [first, second] = split(sack)

  let matchingLetter

  const fArr = [...first]
  const SArr = [...second]

  fArr.forEach((l) => {
    if (SArr.includes(l)) matchingLetter = l
  })

  let nr = matchingLetter.charCodeAt(0)

  if (nr >= 97) nr -= 96
  else nr -= 38

  prioritySum = prioritySum + nr
})

console.log(`part one answer: ${prioritySum}`)

// PART 2

let prioritySum2 = 0

let groupElves = []
let group = []

for (let i = 1; i <= rucksacks.length; i++) {
  group.push(rucksacks[i - 1])

  if (i % 3 === 0) {
    groupElves.push(group)
    group = []
  }
}

groupElves.forEach((group) => {
  const f = [...group[0]]
  let badge = ""

  f.forEach((letter) => {
    if (group[1].includes(letter) && group[2].includes(letter)) badge = letter
  })

  let nr = badge.charCodeAt(0)

  if (nr >= 97) nr -= 96
  else nr -= 38

  prioritySum2 = prioritySum2 + nr
})
console.log(`part two answer: ${prioritySum2}`)
