const data = require('./data.js');

const dataArray = data.split('\n');

// Part 1

let gamma = ''
let epsilon = ''

for(let i = 0; i < dataArray[0].length; i++) {

    let count_0 = 0
    let count_1 = 0

    dataArray.forEach( item => {
        if (item[i] === '0') {
            count_0++
        } else {
            count_1++
        }
    })

    if(count_0 > count_1) {
        gamma = `${gamma}${'0'}`
        epsilon = `${epsilon}${'1'}`
    }else{
        gamma = `${gamma}${'1'}`
        epsilon = `${epsilon}${'0'}`
    }
}

const binaryToDecimal = (binary) => {
    return parseInt(binary, 2)
}

const gammaNr = binaryToDecimal(gamma)
const epsilonNr = binaryToDecimal(epsilon)

console.log("answer nr1", gammaNr * epsilonNr)
