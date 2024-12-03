const data = require("fs").readFileSync("./data.txt", "utf8")

const regex = /mul\(\d{1,3},\d{1,3}\)/g
const doRegex = /do\(\)/g
const dontRegex = /don't\(\)/g

const array = [...data.matchAll(regex)]
const arrayIndex = [...data.matchAll(regex)].map((e) => ({
  index: e.index,
  value: e[0],
}))
const doArrayIndex = [...data.matchAll(doRegex)].map((e) => ({
  index: e.index,
  value: e[0],
}))
const dontArrayIndex = [...data.matchAll(dontRegex)].map((e) => ({
  index: e.index,
  value: e[0],
}))

const combinedArray = [...arrayIndex, ...doArrayIndex, ...dontArrayIndex].sort(
  (a, b) => a.index - b.index
)

function getValue(match) {
  const [a, b] = match.split(",")
  const valueA = a.replace("mul(", "").replace(")", "")
  const valueB = b.replace(")", "")
  return valueA * valueB
}

let partOneResult = 0

array.forEach((e) => {
  const [match] = e

  const value = getValue(match)

  partOneResult += value
})

let partTwoResult = 0

let skip = false

combinedArray.forEach((e) => {
  if (e.value === "do()") {
    skip = false

    return
  }
  if (e.value === "don't()") {
    skip = true
    return
  }

  if (skip) return

  const value = getValue(e.value)

  partTwoResult += value
})

console.log("part two:", partTwoResult)
