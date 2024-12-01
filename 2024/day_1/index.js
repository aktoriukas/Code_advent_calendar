const data = require("fs").readFileSync("./data.txt", "utf8")

let left = []
let right = []

let distance = []

data
  .split("\n")
  .map((e) => e.split("   "))
  .map((e) => {
    left = [...left, +e[0]]
    right = [...right, +e[1]]
  })

left.sort((a, b) => a - b)
right.sort((a, b) => a - b)

left.forEach((e, i) => {
  distance.push(Math.abs(right[i] - e))
})

console.log(
  "distance sum:",
  distance.reduce((acc, curr) => acc + curr, 0)
)

// PART TWO

let similarityScore = 0

const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])

left.forEach((e, i) => {
  const indexes = indexOfAll(right, e)
  similarityScore += indexes.length * e
})

console.log("similarity score:", similarityScore)
