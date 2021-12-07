const util = require('util')

const data = require('./data.js');

const dataArray = data.split('\n\n');

const bingoNumbers = dataArray[0].split(',')

class bingoTable {

    constructor(data) {
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

    checkBingo(number) {
        this.rows.forEach(function(row){
            row.forEach(function(cell){
                if(number === +cell.number){
                    cell.isBingo = true;
                }
            })
        })
        const rowWin = this.checkForRowWin();

        if(rowWin.winner){
            console.log("winner row")
            return {
                winner: true,
                unmarkedNrSum: this.calculateUnmarkedNr(rowWin.winnerRow)
            }
        }

        const columnWin = this.checkForColumnWin();

        if(columnWin.winner){
            console.log("winner column")
            return {
                winner: true,
                unmarkedNrSum: this.calculateUnmarkedNr(columnWin.winnerRow)
            }
        }

        return false
    }

    checkForRowWin() {

        let winner = false
        let winnerRow = {}
        
        this.rows.every(function(row){


            let bingo = true;
            row.forEach(function(cell){
                if(!cell.isBingo){
                    bingo = false;
                }
            })

            if(bingo){ 
                winner = true;
                winnerRow = row;
                return {
                    winner: winner,
                    winnerRow: winnerRow
                }
            }
        })
        return {
            winner: winner,
            winnerRow: winnerRow
        }
    }

    checkForColumnWin() {
        let winner = false
        let winnerRow = {}

        for(let i = 0; i < this.rows.length; i++){
            let bingo = true;
            for(let j = 0; j < this.rows[0].length; j++){
                
                if(!this.rows[j][i].isBingo){
                    bingo = false;
                }
            }
            if(bingo){ 
                winner = true;
                winnerRow = this.rows[i];
                return {
                    winner: winner,
                    winnerRow: winnerRow
                }
            }
        }
        return {
            winner: winner,
            winnerRow: winnerRow
        }
    }

    calculateUnmarkedNr(row) {
        let unmarkedNr = 0
        row.forEach(function(cell){
            if(!cell.isBingo){
                unmarkedNr++
            }
        })
        return unmarkedNr
    }
}

let bingotables = []
let winningNumber = null
let unmarkedNrSum = null


for(let i = 1; i < bingoNumbers.length + 1; i++) {

    bingotables.push(new bingoTable(dataArray[i]))
}

// loop through all the numbers

for(let i = 0; i < bingoNumbers.length; i++) {

    // loop through all the bingotables

    for(let j = 0; j < bingotables.length; j++) {

        // check for bingo

        const result = bingotables[j].checkBingo(bingoNumbers[i])

        if(result.winner){
            winningNumber = +bingoNumbers[i]
            unmarkedNrSum = +result.unmarkedNrSum
            break
        }
    }

    if(winningNumber){ break }

}

console.log(winningNumber)
console.log(unmarkedNrSum)

// const unmarkedNumbers = winningtable.calculateWinnigNumber()

// console.log("Part 1 winning", +unmarkedNumbers * +winningNumber)

// incorrect 75140, 48216, 46452 ( too high)