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

// Part 2

const calculateOxygen = () => {

    let currentArray = [...dataArray]
    let array0 = []
    let array1 = []
    let i = 0

    while(currentArray.length > 1) {

        currentArray.forEach(item => {
            if(item[i] === '0'){
                array0.push(item)
            }else{
                array1.push(item)
            }
        })
    
        if(array0.length > array1.length){
            currentArray = array0
        }
        else if(array1.length > array0.length){
            currentArray = array1
        }
        else{
            currentArray = array1
        }

        array0 = []
        array1 = []
        i++
    }
    return currentArray
}

const calculateO2 = () => {
    let currentArray = [...dataArray]
    let array0 = []
    let array1 = []
    let i = 0

    while(currentArray.length > 1) {

        currentArray.forEach(item => {
            if(item[i] === '0'){
                array0.push(item)
            }else{
                array1.push(item)
            }
        })
    
        if(array0.length < array1.length){
            currentArray = array0
        }
        else if(array1.length < array0.length){
            currentArray = array1
        }
        else{
            currentArray = array0
        }

        array0 = []
        array1 = []
        i++
    }
    return currentArray
}

const oxygen = calculateOxygen()
const o2 = calculateO2()

const oxygenNr = binaryToDecimal(oxygen[0])
const o2Nr = binaryToDecimal(o2[0])

console.log("answer nr2", oxygenNr * o2Nr)