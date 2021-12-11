const data = require('./data.js');

const dataArray = data.split('\n')

const symbols = {
    opening: ['(', '{', '[', '<'],
    closing: [')', '}', ']', '>']
}
const errSymbols = []
let answer1 = 0
let corruptedArray = []
// Part 1

dataArray.forEach((line, index) => {

    let lastChar = []

    line.split('').forEach(char => {

        if(symbols.opening.includes(char)) {
            lastChar.push(char)
        }
        if(symbols.closing.includes(char)) {
            const lastCharIndex = symbols.opening.indexOf(lastChar.pop())

            if(lastCharIndex !== symbols.closing.indexOf(char)) {
                console.log('error -1', char)
                errSymbols.push(char)
                corruptedArray.push(line)
            }
        }
    })
})

errSymbols.forEach(char => {
    switch(char) {
        case '>':
            answer1 += 25137
            break

        case '}':
            answer1 += 1197
            break

        case ']':
            answer1 += 57
            break

        case ')':
            answer1 += 3
            break
    }
})

// Part 2
let answer2 = 0

let addedSymbols = []

const corruptedArrays = dataArray.filter( s => !corruptedArray.includes(s) );

corruptedArrays.forEach((arr, index) => {

    let lastChar = []
    
    console.log(arr)
    arr.split('').forEach(char => {
        if(symbols.opening.includes(char)) {
            lastChar.push(char)
        }
        if(symbols.closing.includes(char)) {
            let indexOfChar = symbols.closing.indexOf(char)

            if(char !== symbols.opening[indexOfChar]) {
                lastChar.pop()
            }
        }
    })
    addedSymbols[index] = {
        lastChar: lastChar,
        score: 0
    }
});

addedSymbols.forEach(arr => {
    for(let i = arr.lastChar.length - 1; i >= 0; i--) {
        arr.score = arr.score * 5
        switch(arr.lastChar[i]) {
            case '<':
                arr.score += 4
                break
    
            case '{':
                arr.score += 3
                break
    
            case '[':
                arr.score += 2
                break
    
            case '(':
                arr.score += 1
                break
        }    
    }
})

const getMiddleNumber = (addedSymbols) => {
    let scoreArray = []
    addedSymbols.forEach(arr => {
        scoreArray.push(arr.score)
    });
    scoreArray.sort((a, b) => a - b)
    return scoreArray[Math.floor(scoreArray.length / 2)]
}

answer2 = getMiddleNumber(addedSymbols)


console.log("answer nr1", answer1)
console.log("answer nr2", answer2)