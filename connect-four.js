import {Game} from "./game.js"

let game = undefined;
//functions
function updateUI(){
    if(!game){
        document.getElementById("board-holder").classList.add("is-invisible")
    } else if(game){
        document.getElementById("game-name").innerHTML = game.getName();
        document.getElementById("board-holder").classList.remove("is-invisible");
        switchTurn();
        updateTokenks();
        updateFull();
    }
        
}

function switchTurn(){
    if(game.playerTurn === 1){
        document.getElementById("click-targets").classList.add("black");
        document.getElementById("click-targets").classList.remove("red");
    } else{
        document.getElementById("click-targets").classList.remove("black");
        document.getElementById("click-targets").classList.add("red");
    }
}

function updateTokenks(){
    for(let i = 0; i <=5; i++){
        for(let j = 0; j <=6; j++){
            const token = game.getTokenAt(j,i);
            if(token){
                const square = document.getElementById(`square-${i}-${j}`);
                square.innerHTML = "";
                const newEl = document.createElement("div");
                newEl.classList.add("token")
                if(token === 1){
                    newEl.classList.add("black");
                } else{
                    newEl.classList.add("red");
                }
                square.appendChild(newEl)
            }
            
        }
    }
}

function updateFull(){
    for(let i = 0; i < 7; i++){
        if(game.columnIsFull(i)){
            document.getElementById(`column-${i}`).classList.add("full")
        } else{
            document.getElementById(`column-${i}`).classList.remove("full")
        }
    }
}

function activateNewGameButtonLogic(){
    if(document.getElementById("player-1-name").value && document.getElementById("player-2-name").value){
        enableNewGameButton();
    } else{
        disableNewGameButton()
    }
}

function enableNewGameButton(){
    document.getElementById("new-game").disabled = false;
}

function disableNewGameButton(){
    document.getElementById("new-game").disabled = true;
}

function newGameButtonClick(){
    const p1input = document.getElementById("player-1-name");
    const p2input = document.getElementById("player-2-name");
    game = new Game(p1input.value, p2input.value);
    p1input.value = '';
    p2input.value = '';
    disableNewGameButton();
    updateUI();
}

function clickTargetClicked(event){
    if(event.target.classList.contains("full")){
        return;
    }
    const columnNumber = event.target.id[event.target.id.length -1];
    game.playInColumn(columnNumber);
    updateUI();
}

window.addEventListener("DOMContentLoaded", function(){
    //event listeners
    document.getElementById("player-1-name").addEventListener("keyup", activateNewGameButtonLogic);
    document.getElementById("player-2-name").addEventListener("keyup", activateNewGameButtonLogic);
    document.getElementById("new-game").addEventListener('click', newGameButtonClick);
    document.getElementById("click-targets").addEventListener("click", clickTargetClicked)
})