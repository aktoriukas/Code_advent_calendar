const data = require('./data.js');

// Part 1

const dataArray = data.split('\n');
let forward_position = 0;
let depth = 0;

dataArray.forEach(function(data) {

    const dataItems = data.split(' ');
    const action = dataItems[0]
    const value = +dataItems[1];

    switch (action) {
        case 'forward':
            forward_position += value;
            break

        case 'up':
            depth -= value;
            break

        case 'down':
            depth += value;
            break

        default:
            break
    }
})

console.log("answer nr1", depth * forward_position)

// Part 2

let horizontal_position = 0;
let depth_part2 = 0
let aim = 0;

dataArray.forEach(function(data) {

    const dataItems = data.split(' ');
    const action = dataItems[0]
    const value = +dataItems[1];

    switch (action) {
        case 'forward':
            horizontal_position += value;
            depth_part2 =  depth_part2 + (aim * value)
            break

        case 'up':
            aim -= value;
            break

        case 'down':
            aim += value;
            break

        default:
            break
    }
})

console.log("Answer nr2", depth_part2 * horizontal_position)
