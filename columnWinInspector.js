class ColumnWinInspector {
    constructor(column){
        this.column = column;
    }

    inspect(){
        if(this.column.length() > 3){
            for(i = 0; i <=3; i++){
                const baseToken = this.column.getTokenAt(i)
                if(baseToken !== undefined){
                    for(j = 1; j <= 3; j++){
                        if(this.column.getTokenAt(j) !== baseToken){
                            break;
                        } else if(i === 3){
                            return baseToken
                        }
                    }
                }
                return 0;
            }
        }
    }
}

export {ColumnWinInspector}