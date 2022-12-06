const fs = require("fs")

const data = fs.readFileSync("./data.txt", { encoding: "utf8" })

// Part 1

let markerReceived = false
let firstMarkerAfter = 1
let marker = []

function isStringUnique(string) {
  let unique = true
  let stringArr = [...string]
  stringArr.forEach((char) => {
    let firstIndex = stringArr.indexOf(char)
    let lastIndex = stringArr.lastIndexOf(char)

    if (firstIndex !== lastIndex) {
      unique = false
    }
  })

  return unique
}

while (!markerReceived) {
  marker.push(data[firstMarkerAfter - 1])
  if (marker.length > 4) {
    marker.shift()
    if (isStringUnique(marker.join(""))) markerReceived = true
  }

  firstMarkerAfter++
}

console.log("part one answer", firstMarkerAfter - 1)

// Part 2

let messageMarkerReceived = false
let firstMessageMarkerAfter = 1
let messageMarker = []

while (!messageMarkerReceived) {
  messageMarker.push(data[firstMessageMarkerAfter - 1])
  if (messageMarker.length > 14) {
    messageMarker.shift()
    if (isStringUnique(messageMarker.join(""))) messageMarkerReceived = true
  }

  firstMessageMarkerAfter++
}

console.log("part two answer", firstMessageMarkerAfter - 1)
