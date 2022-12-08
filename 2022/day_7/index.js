const fs = require("fs")

const data = fs.readFileSync("./data.txt", { encoding: "utf8" })

const rules = data.split("\n")

// Part 1

let currentDir = ""
let scructure = {}

let answerone = 0

rules.forEach((rule) => {
  if (rule[0] === "$") {
    // commands
    const [_, command, dir] = rule.split(" ")

    if (command === "cd") {
      // command to move to a directory

      if (dir === "..") currentDir = currentDir.split("/").slice(0, -1).join("/")
      else if (dir === "/") currentDir = "~"
      else currentDir = `${currentDir}/${dir}`
    } else if (command === "ls") {
      // add all sizes of that file
    }
  } else if (rule.slice(0, 3) === "dir") {
    // it's a dir
  } else {
    // structure
    const [size, name] = rule.split(" ")
    let activeDir = {}

    currentDir.split("/").forEach((dir, i) => {
      if (dir === "~") activeDir = scructure
      else {
        activeDir[dir] = activeDir[dir] || {}
        activeDir = activeDir[dir]
      }
    })

    activeDir[name] = +size
  }
})

function checkDirSize(dir) {
  let totalDirSize = 0

  for (let property in dir) {
    if (typeof dir[property] === "number") totalDirSize += dir[property]
    else {
      let totalChildSize = checkDirSize(dir[property])
      totalDirSize += totalChildSize
    }
  }
  dir["totalSize"] = totalDirSize

  if (totalDirSize <= 100000) answerone += totalDirSize
  return totalDirSize
}

for (let property in scructure) {
  scructure["totalSize"] = scructure["totalSize"] || 0

  if (typeof scructure[property] === "number") scructure["totalSize"] += scructure[property]
  else {
    let totalChildSize = checkDirSize(scructure[property])
    scructure["totalSize"] += totalChildSize
  }
}

console.log("answer one", answerone)
