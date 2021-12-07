const data = require('./data.js');

const dataArray = data.split('\n\n');

const bingoNumbers = dataArray[0].split(',')

class bingoTable {

    constructor(data) {
        this.data = data;
        const rows = data.split('\n');
        this.rows = rows.map(function(row){
            const regex = /\d+/g;
            let matches = row.match(regex);
            return matches.map(function(match){
                return {
                    number: match,
                    isBingo: false
                }
            })
        })
    }
}

let bingotables = []

for(let i = 1; i < bingoNumbers.length; i++) {
    bingotables.push(new bingoTable(dataArray[i]))
}