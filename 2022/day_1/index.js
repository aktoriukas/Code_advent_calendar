const data = require("./data.js")

const elfArray = data.split("\n\n")

// PART ONE -----

const largestElf = {
  index: 0,
  calories: 0,
}

elfArray.forEach((elf, index) => {
  let calories = elf.split("\n")

  let totalCal = 0
  calories.forEach((c) => {
    totalCal += +c
  })

  if (totalCal > largestElf.calories) {
    largestElf.calories = totalCal
    largestElf.index = index
  }
})

console.log("---- end for PART 1 -----")
console.log("largestElf", largestElf)

// PART TWO ----

const topElfs = [0, 0, 0]

elfArray.forEach((elf, index) => {
  let calories = elf.split("\n")

  let totalCal = 0
  calories.forEach((c) => {
    totalCal += +c
  })

  topElfs.push(totalCal)
})

topElfs.sort((a, b) => b - a)

const topElfsSum = topElfs[0] + topElfs[1] + topElfs[2]

console.log("---- end for PART 2 -----")
console.log("top 3 largest elfs SUM", topElfsSum)
