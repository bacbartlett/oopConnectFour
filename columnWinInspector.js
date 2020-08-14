class ColumnWinInspector {
    constructor(column){
        this.column = column;
    }

    inspect(){
        if(this.column.getLength() > 3){
            for(let i = 0; i <=3; i++){
                const baseToken = this.column.getTokenAt(i);
                if(baseToken !== null){
                    for(let j = 1; j <= 3; j++){
                        if(this.column.getTokenAt(i + j) !== baseToken){
                            break;
                        } else if(j === 3){
                            return baseToken
                        }
                    }
                }
                
            }
            
        }
        return 0;
    }
}

export {ColumnWinInspector}