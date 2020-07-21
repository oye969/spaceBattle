class ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    isDestructed(){
        return (this.hull < 1) 
    }
    isActive(){
        return (this.hull > 0) 
    }
    approach(aimShip){
       
        
        if(Math.random() >= this.accuracy){
            console.log(this.name + " shoots at " + aimShip.name + " and hits!");
            aimShip.getDamage(this.firepower)
        } else{
            console.log(this.name + " shoots at " + aimShip.name + " and missed!");
        }
    }
    getDamage(disabled){
        hitMsg(this.name + " takes " + disabled + " damage!");
        this.hull -= disabled;
    }
}

function createAlienSquadron(numShips){
    let squadron = [];
    let alien;
    for(x=0; x<numShips; x++){
        y = x + 1;
        alien = new ship('Alien Space Ship ' + y, range(3,6), range(2,4), decrange(6,8),);
        squadron.push(alien);
    }
    return squadron;
}