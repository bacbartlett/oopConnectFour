import {Column} from "./column.js";
import {ColumnWinInspector} from "./columnWinInspector.js"
import {RowWinInspector} from "./row-win-inspector.js"
import {DiagonalWinInspector} from "./diagonalWinInspector.js"

class Game{
    constructor(p1name, p2name){
        this.name1 = p1name;
        this.name2 = p2name;
        this.playerTurn = 1;
        this.columns = [new Column, new Column, new Column, new Column, new Column, new Column, new Column];
        this.winnerNumber = 0;
    }
    getName(){
        if(this.winnerNumber === 0){
            return `${this.name1} vs. ${this.name2}`
    } else if(this.winnerNumber === 1){
        return `${this.name1} Wins`
    }
    else if(this.winnerNumber === 2){
        return `${this.name2} Wins`
    }
    else if(this.winnerNumber === 3){
        return `${this.name1} TIED ${this.name2}`
    }
}
    
    playInColumn(columnNumber){
        this.columns[columnNumber].add(this.playerTurn)
        if(this.playerTurn === 1){
            this.playerTurn = 2
        }else{
            this.playerTurn = 1
        }
        this.checkForColumnWin();
        this.checkForTie();
    }

    getTokenAt(columnNumber, rowNumber){
        return this.columns[columnNumber].getTokenAt(rowNumber)
    }

    columnIsFull(columnNumber){
        return this.columns[columnNumber].isFull()
    }

    checkForTie(){
        const tie = this.columns.every(function(el){
            return el.isFull()
        });
        if(tie){
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin(){
        for(let i = 0; i<this.columns.length;i++){
            if(this.winnerNumber === 0){
                this.winnerNumber = new ColumnWinInspector(this.columns[i]).inspect();
            }
        }
        this.checkForRowWin();
    }
    checkForRowWin(){
        for(let i=0; i<4; i++){
            if (this.winnerNumber!==0){break;}
            let arrSlice = this.columns.slice(i, i+4);
            let rowInspector = new RowWinInspector(arrSlice);
            this.winnerNumber = rowInspector.inspect()
        }
        this.checkForDiagonalWin();
    }

    checkForDiagonalWin(){
        for(let i=0; i<4; i++){
            if (this.winnerNumber!==0){break;}
            let arrSlice = this.columns.slice(i, i+4);
            let diagonalInspector = new DiagonalWinInspector(arrSlice);
            this.winnerNumber = diagonalInspector.inspect()
        }
    }

}

export {Game}