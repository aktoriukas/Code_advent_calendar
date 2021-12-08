const data = require('./data.js');
// const data = '16,1,2,0,4,2,7,1,2,14'

const dataArr = data.split(',').map(Number);

let highestNr = 0;
let lowestNr = 10000;
let fuelCost = 9999999999999
let fuelCost2 = 9999999999999999999

dataArr.forEach(function(nr){
    if(highestNr < nr) highestNr = nr;
    if(lowestNr > nr) lowestNr = nr;
})

const calculateFuelCost = (currentTestNr) => {

    let fuelCostT = 0;
    dataArr.forEach(function(nr){
        fuelCostT += Math.abs(currentTestNr - nr)
    })
    return fuelCostT;
}
const calculateFuelCost2 = (currentTestNr) => {

    let fuelCostT = 0;

    dataArr.forEach(function(nr){
        
        let costNr = Math.abs(currentTestNr - nr)

        let x = 0
        for(let i = 0; i <= costNr; i++){
            fuelCostT += i
            x += i
        }
    })
    return fuelCostT;
}

for(let i = 0; i < highestNr; i++) {
    let testFuelCost = calculateFuelCost(i);
    let testFuelCost2 = calculateFuelCost2(i);
    if(testFuelCost < fuelCost) fuelCost = testFuelCost;
    if(testFuelCost2 < fuelCost2) fuelCost2 = testFuelCost2;
}

console.log("Part 1 answer:" , fuelCost)

console.log("Part 2 answer:" , fuelCost2)
