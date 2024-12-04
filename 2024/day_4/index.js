const data = require("fs").readFileSync("./data.txt", "utf8")

let xmas = 0

const table = data.split("\n").map((e) => e.split(""))

function findHorizontalXmas(i, ii) {
  let v = 0
  if (
    table[i]?.[ii + 1] === "M" &&
    table[i]?.[ii + 2] === "A" &&
    table[i]?.[ii + 3] === "S"
  )
    v++
  //reverse
  if (
    table[i]?.[ii - 1] === "M" &&
    table[i]?.[ii - 2] === "A" &&
    table[i]?.[ii - 3] === "S"
  )
    v++

  return v
}

function findVerticalXmas(i, ii) {
  let v = 0

  if (
    table[i + 1]?.[ii] === "M" &&
    table[i + 2]?.[ii] === "A" &&
    table[i + 3]?.[ii] === "S"
  )
    v++
  //reverse
  if (
    table[i - 1]?.[ii] === "M" &&
    table[i - 2]?.[ii] === "A" &&
    table[i - 3]?.[ii] === "S"
  )
    v++
  return v
}
function findDiagonalXmas(i, ii) {
  let v = 0

  // down - right
  if (
    table[i + 1]?.[ii + 1] === "M" &&
    table[i + 2]?.[ii + 2] === "A" &&
    table[i + 3]?.[ii + 3] === "S"
  )
    v++
  // down - left
  if (
    table[i + 1]?.[ii - 1] === "M" &&
    table[i + 2]?.[ii - 2] === "A" &&
    table[i + 3]?.[ii - 3] === "S"
  )
    v++
  // up - right
  if (
    table[i - 1]?.[ii + 1] === "M" &&
    table[i - 2]?.[ii + 2] === "A" &&
    table[i - 3]?.[ii + 3] === "S"
  )
    v++
  // up - left
  if (
    table[i - 1]?.[ii - 1] === "M" &&
    table[i - 2]?.[ii - 2] === "A" &&
    table[i - 3]?.[ii - 3] === "S"
  )
    v++
  return v
}

table.forEach((row, i) => {
  row.forEach((letter, ii) => {
    if (letter !== "X") return

    xmas = xmas + findHorizontalXmas(i, ii)
    xmas = xmas + findVerticalXmas(i, ii)
    xmas = xmas + findDiagonalXmas(i, ii)
  })
})

console.log("part one:", xmas)

let xmas2 = 0

function findMAS(i, ii) {
  let [a, b] = [false, false]
  if (
    (table[i + 1]?.[ii - 1] === "M" && table[i - 1]?.[ii + 1] === "S") ||
    (table[i + 1]?.[ii - 1] === "S" && table[i - 1]?.[ii + 1] === "M")
  )
    a = true

  if (
    (table[i - 1]?.[ii - 1] === "M" && table[i + 1]?.[ii + 1] === "S") ||
    (table[i - 1]?.[ii - 1] === "S" && table[i + 1]?.[ii + 1] === "M")
  )
    b = true

  return a === true && b === true ? 1 : 0
}

table.forEach((row, i) => {
  row.forEach((letter, ii) => {
    if (letter !== "A") return

    xmas2 = xmas2 + findMAS(i, ii)
  })
})

console.log("part two:", xmas2)
