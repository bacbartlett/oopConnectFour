class DiagonalWinInspector{
    constructor(columns){
        this.columns = columns
    }

    inspect(){
        for(let i = 0; i < 3; i++){
            const baseToken = this.columns[0].getTokenAt(i);
            if(baseToken === null){continue;}
            for(let j = 1; j < 4; j++){
                if(baseToken !== this.columns[j].getTokenAt(i+j)){
                    break
                } else if(j >= 3){
                    return baseToken
                }
            }
        }
        for(let i = 0; i < 3; i++){
            const baseToken = this.columns[0].getTokenAt(5-i);
            if(baseToken === null){continue;}
            for(let j = 1; j < 4; j++){
                if(baseToken !== this.columns[j].getTokenAt(5-i-j)){
                    break
                } else if(j >= 3){
                    return baseToken
                }
            }
        }
        return 0;
    }
}

export {DiagonalWinInspector}