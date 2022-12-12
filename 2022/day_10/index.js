const fs = require("fs")

const data = fs.readFileSync("./data.txt", { encoding: "utf8" })

const execution = data.split("\n")

// part 1

let cycle = 0
let programIndex = 0
let x = 1
let signal = 0

let loop = true

function checkForCycles() {
  switch (cycle) {
    case 20:
      signal = signal + x * 20
      break
    case 60:
      signal = signal + x * 60
      break
    case 100:
      signal = signal + x * 100
      break
    case 140:
      signal = signal + x * 140
      break
    case 180:
      signal = signal + x * 180
      break
    case 220:
      signal = signal + x * 220
      break
    default:
      break
  }
  console.log(`Cycle:${cycle} | X:${x} | ProgramIndex:${programIndex}`)
}

while (loop) {
  cycle++
  const [instruction, value] = execution[programIndex].split(" ")

  if (instruction === "addx") {
    checkForCycles()

    cycle++

    checkForCycles()

    x = x + Number(value)
  } else if (instruction === "noop") {
    // check for cycles
    checkForCycles()
  }

  programIndex++

  if (execution[programIndex] === undefined) loop = false
}

console.log("answer one", signal)
