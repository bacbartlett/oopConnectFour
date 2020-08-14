class Column{
    constructor(arr = []){
        this.columnArr = arr;
    }
    add(playerCode){
        this.columnArr.push(playerCode);
    }

    getLength(){
        return this.columnArr.length;
    }
    getTokenAt(rowNumber){
        let val = this.columnArr[5-rowNumber];
        if(val === undefined){
            val = null;
        };
        return val;
    }
    isFull(){
        return this.columnArr.length >= 6;
    }
}

export {Column}