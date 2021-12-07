const data = require('./data.js');

// Part 1

const dataArray = data.split('\n');
let current_biggest = +dataArray[0]; 
let increase_count = 0;

dataArray.forEach(function(element) {
  if (+element > current_biggest) {
    current_biggest = element;
    increase_count++;
  }else{
    current_biggest = +element;
  }
})

console.log('answer nr1',increase_count);

// Part 2

let previuos_sliding_nr = +dataArray[0] + dataArray[1] + dataArray[2];
let increase_count2 = 0

dataArray.forEach(function(element, index) {
    if (index > 0) {

        if(!element || !dataArray[index + 1] || !dataArray[index + 2]){
            console.log('error');
            return;
        }

        let sum = +element + +dataArray[index + 1] + +dataArray[index + 2]

        if(sum > previuos_sliding_nr) {
            previuos_sliding_nr = sum;
            increase_count2++;
        }else{
            previuos_sliding_nr = sum;
        }
    }
})

console.log('answer nr2',increase_count2);