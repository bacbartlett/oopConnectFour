class GameJsonDeserializer{
    constructor(serializedGame, game){
        this.serializedGame = JSON.parse(serializedGame);
        this.game = game;
    }
    deserialize(){
        this.game.name1 = this.serializedGame.p1;
        this.game.name2 = this.serializedGame.p2;
        for(let i=0;i<this.serializedGame.serializedCols.length; i++){
            let columnNumber = Math.floor((i+1)/6);
            this.game.playerTurn = this.serializedGame.serializedCols[i];
            this.game.playInColumn(columnNumber);
        }
    }

}