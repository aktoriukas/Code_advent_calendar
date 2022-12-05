const data = require("./data.js")

// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// const stacks = [["Z", "N"], ["M", "C", "D"], ["P"]]

const stacks = [
  ["B", "V", "S", "N", "T", "C", "H", "Q"],
  ["W", "D", "B", "G"],
  ["F", "W", "R", "T", "S", "Q", "B"],
  ["L", "G", "W", "S", "Z", "J", "D", "N"],
  ["M", "P", "D", "V", "F"],
  ["F", "W", "J"],
  ["L", "N", "Q", "B", "J", "V"],
  ["G", "T", "R", "C", "J", "Q", "S", "N"],
  ["J", "S", "Q", "C", "W", "D", "M"],
]

// Part 1
let partOneAnswer = ""

const procedures = data.split("\n")

function formatProcedure(procedure) {
  const [_, amount, __, from, ___, to] = procedure.split(" ")
  return { amount, from, to }
}

const formattedProcedures = procedures.map(formatProcedure)

formattedProcedures.forEach((procedure) => {
  const { amount, from, to } = procedure

  for (let i = 0; i < amount; i++) {
    stacks[to - 1].push(stacks[from - 1].pop())
  }
})

stacks.forEach((stack, index) => {
  partOneAnswer = `${partOneAnswer}${stack[stack.length - 1]}`
})

// Part 2

const stacks2 = [
  ["B", "V", "S", "N", "T", "C", "H", "Q"],
  ["W", "D", "B", "G"],
  ["F", "W", "R", "T", "S", "Q", "B"],
  ["L", "G", "W", "S", "Z", "J", "D", "N"],
  ["M", "P", "D", "V", "F"],
  ["F", "W", "J"],
  ["L", "N", "Q", "B", "J", "V"],
  ["G", "T", "R", "C", "J", "Q", "S", "N"],
  ["J", "S", "Q", "C", "W", "D", "M"],
]

let partTwoAnswer = ""

formattedProcedures.forEach((procedure) => {
  const { amount, from, to } = procedure

  const movingStack = stacks2[from - 1].slice(-amount)

  for (let i = 0; i < amount; i++) stacks2[from - 1].pop()

  stacks2[to - 1] = [...stacks2[to - 1], ...movingStack]
})

stacks2.forEach((stack, index) => {
  partTwoAnswer = `${partTwoAnswer}${stack[stack.length - 1]}`
})

console.log("part two answer:", partTwoAnswer)
