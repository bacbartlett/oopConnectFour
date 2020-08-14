class RowWinInspector{
    constructor(columns){
        this.columns = columns;
    }

    inspect(){
        for(let j=0; j<6;j++){
            let baseToken = this.columns[0].getTokenAt(j);
            if(baseToken === null){continue;}
            for(let i=1; i<this.columns.length; i++){
                console.log(i);
                if(this.columns[i].getTokenAt(j)!==baseToken){break;}
                else if(i>=3){return baseToken;}
            }
        }
        return 0;
    }
}

export {RowWinInspector}