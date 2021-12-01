const data = 
`1000655
17,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,x,23,x,x,x,x,x,29,x,401,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,19`

const arrivingTime = parseInt(data.split('\n')[0]);
const busses = data.split('\n')[1].split(',');

let validBusses = []
let Bus;
let sorted = false;
let checkArray;

function findFirstBus() {
    let lowest = validBusses[0];
    for( let i = 1; i < validBusses.length; i++){
        if ( validBusses[i].waitingTime < lowest.waitingTime) {
            lowest = validBusses[i];
        }
    }
    return lowest
}

busses.forEach(function(bus, index) {
    Bus = {}
    if ( bus != 'x') {
        Bus.gap = index
        Bus.interval = parseInt(bus);
        Bus.times = []
        Bus.currentTime = parseInt(bus);
        Bus.t = 0;
        validBusses.push(Bus)
    }
})

for (let i = 0; i < validBusses.length; i++) {

    while ( validBusses[i].currentTime < arrivingTime ) {

        validBusses[i].currentTime += validBusses[i].interval;
    }
    validBusses[i].waitingTime = validBusses[i].currentTime - arrivingTime
}
let fastestBus = findFirstBus();

// while (sorted !== true) {
//     validBusses[0].t += validBusses[0].interval;
//     checkArray = [];

//     for ( let i = 1; i < validBusses.length; i ++) {
//         validBusses[i].t = 0;
//         while ( validBusses[i].t + validBusses[i].gap < validBusses[0].t){
//             validBusses[i].t += validBusses[i].interval
//         }
//     }
//     for (let i = 1; i < validBusses.length; i++) {
//         if (validBusses[i].t == validBusses[i-1].t + validBusses[i].gap) {
//             checkArray.push(true)
//         } else {
//             checkArray.push(false)
//         }
//     }
//     if ( checkArray.indexOf(false) == -1) {
//         sorted = true
//     }
// }

console.log(validBusses)
console.log(checkArray)
console.log(sorted)
console.log(`answer nr1: ${fastestBus.waitingTime * fastestBus.interval}`)

//PART 1 138