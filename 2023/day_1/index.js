const data = require("fs").readFileSync("./data.txt", "utf8")

let rowsAnswers = []
let rows = data.split("\n")

rows.forEach((row) => {
  const v = row.split("")
  let first = v.findIndex((e) => Number.isInteger(+e))
  let last = v.findLastIndex((e) => Number.isInteger(+e))
  rowsAnswers.push(`${row[first]}${row[last]}`)
})

const answer1 = rowsAnswers.reduce((acc, curr) => acc + +curr, 0)

console.log("part one answer:", answer1)
