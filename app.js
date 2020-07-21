let heroShip;
let alienShips;
let alienShip;

window.onload = startGame;

function safeMsg(msg){
    console.log(`%c ${msg}`, `color: blue`);
}
function hitMsg(msg){
    console.log(`%c ${msg}`, `color: red`);
}


function range(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function decrange(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min))/10;

}

function startGame(){
heroShip = new ship("USS Schwarzenegger", 20, 5, 0.7);
alienShips = createAlienSquadron(6);


console.log('%cSpaceBattle','font-size: 50px');
console.log('%cAliens are attacking Earth!', 'font-size: 30px; font-style: italic; background: rgb(135, 226, 230); border: 1px solid grey;');
console.log('%cYou have to attack before the Aliens invade Earth!.', 'font-size: 30px; font-style: italic; background: rgb(236, 238, 241); border: 1px solid grey;');
console.log('%cAttack the Aliens SS in order!', 'font-size: 30px; color: green; font-family: Arial;');
console.log('%cIt is detected that ' + alienShips.length + ' alien ships approaching!', 'font-size: 30px;color: blue; font-style: italic;');
console.log('%cUSS Schwarzenegger ATTACK! no RETREAT no SURRENDER!','font-size: 30px; color: red;');
setTimeout(() => { 
    console.log("Attack when in range!");
    gameLoop(); }, 2000);
}


function gameLoop(){

    if(alienShip === undefined){
        alienShip = alienShips.shift();
    }


    console.log(heroShip);
    console.log(alienShip);

    if(alienShip.isActive()){
        heroShip.approach(alienShip);
    }

    if(alienShip.isDestructed()){
        safeMsg(alienShip.name + " destroyed!")
        alienShip = undefined;
    } else if(heroShip.isActive()){
        alienShip.approach(heroShip);
    }

    

   
    if(heroShip.isDestructed()){
        hitMsg("Your Space Ship has been Destroyed");
        gameLost();
        return;
    }
    if(alienShips.length == 0 && alienShip === undefined){
        gameWon();
        return;
    }
    
    setTimeout(() => {     
        let result = prompt("What is the Order? Attack or Retreat?","Attack")
        console.log(result);
        switch(result) {
            case "Attack": gameLoop();
            break;
            default: gameLost();
        }
    }, 2000);
       
}

function gameLost(){
    hitMsg("The Earth is INVADED!");
}
function gameWon(){
    safeMsg("The Earth is saved from ALIENS invasion!");
}