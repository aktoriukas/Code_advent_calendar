const data = require("./data.js")

const pairs = data.split("\n")

// Part 1

let totalReasignmentsPairs = 0

pairs.forEach((pair, index) => {
  const [first, second] = pair.split(",")
  const [firstLeft, firstRight] = first.split("-")
  const [secondLeft, secondRight] = second.split("-")

  if (+firstLeft >= +secondLeft && +firstRight <= +secondRight) totalReasignmentsPairs += 1
  else if (+secondLeft >= +firstLeft && +secondRight <= +firstRight) totalReasignmentsPairs += 1
})

console.log("part one answer:", totalReasignmentsPairs)

// Part 2

let totalOverlappingPairs = 0

pairs.forEach((pair, index) => {
  const [first, second] = pair.split(",")
  const [firstLeft, firstRight] = first.split("-")
  const [secondLeft, secondRight] = second.split("-")

  if (+firstLeft >= +secondLeft && +firstLeft <= +secondRight) totalOverlappingPairs += 1
  else if (+secondLeft <= +firstRight && +secondLeft >= +firstLeft) totalOverlappingPairs += 1
})

console.log("part two answer:", totalOverlappingPairs)
