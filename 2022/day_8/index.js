const fs = require("fs")

const data = fs.readFileSync("./data.txt", { encoding: "utf8" })

let table = []

data.split("\n").forEach((row, i) => (table[i] = [...row]))

// Part 1

let visibleTrees = 0

function checkForVisibleTrees(array) {
  let highestTree = array[0]
  array.every((tree, i) => {
    if (i === 0) return true
    else if (highestTree < tree) {
      visibleTrees++
      highestTree = tree
      return true
    }
    return true
  })
}

// rows

table.forEach((row, i) => {
  //   sides
  //   row.forEach((_, j) => {
  //     if (i === 0 || j === 0 || table.length - 1 === i || row.length - 1 === j) visibleTrees++
  //   })
  //   if (i === 0 || table.length - 1 === i) return
  //   checkForVisibleTrees(row, i)
  //   let reversedRow = [...row].reverse()
  //   checkForVisibleTrees(reversedRow, i)
})

// columns

for (let i = 0; i < table[0].length; i++) {
  if (i !== 0 && i !== table[0].length - 1) {
    let column = []
    for (let j = 0; j < table.length; j++) {
      column.push(table[j][i])
    }
    checkForVisibleTrees(column)
    let reversedColumn = [...column].reverse()
    checkForVisibleTrees(reversedColumn)
  }
}

// console.log(table)

// to low 586
// to high 3487
// not 2193
console.log("table:", table)

console.log("answer one:", visibleTrees)
