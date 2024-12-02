const data = require("fs").readFileSync("./data.txt", "utf8")

const reports = data.split("\n")

let saveReports = 0
let saveReporstsWithTolerance = 0

function checkIfSave(arr) {
  let direction = null

  for (let i = 0; i < arr.length; i++) {
    const currect = +arr[i]
    const next = +arr[i + 1]

    if (currect === next) return { save: false, index: i }

    if (!direction) {
      if (+currect > +next) direction = "decrease"
      else direction = "increase"
    }

    if (direction === "decrease" && (currect < next || currect - 3 > next))
      return { save: false, index: i }

    if (direction === "increase" && (currect > next || currect + 3 < next))
      return { save: false, index: i }
  }

  return { save: true, index: null }
}

reports.forEach((e) => {
  const numbers = e.split(" ")

  const { save, index } = checkIfSave(numbers)

  if (!save) numbers.splice(index, 1)

  !save &&
    console.log(
      "------\nNEW ARRAY:",
      numbers,
      "\nSAVE:",
      save,
      "\nINDEX:",
      index
    )

  const { save: toleranceSave } = checkIfSave(numbers)

  save && saveReports++
  toleranceSave && saveReporstsWithTolerance++
})

console.log("save reports:", saveReports)
console.log("save reports with tolerance:", saveReporstsWithTolerance)
