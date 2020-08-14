class GameJsonSerializer{
    constructor(game){
        this.p1 = game.name1;
        this.p2 = game.name2;
        this.serializedCols = [];
        this.columns = game.columns;
    }

    serializeGame(){
        let obj = {
            name1: this.p1,
            name2: this.p2,
            serializedCols: this.serializedCols,
        }
        for(let i=0; i<this.columns.length; i++){
            for(let j=0; j<6; j++){
                obj.serializedCols.push(this.columns[i].getTokenAt(j));
            }
        }
        return JSON.stringify(obj);
    }
}

export {GameJsonSerializer}