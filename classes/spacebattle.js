// Create object that is the the schwarzenegger
var ussSchwarzenneger = {
  // hull = hitpoints (schwarzenegger has 20)
  hull: 20,
  // firepower = amount of damage done to the hull of a successful target hitpoints
  firepower: 5,
  // accuracy = chance between = and 1 that the ship will hit it's target
  accuracy: .7
}
console.log(ussSchwarzenneger);

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+ 1)) + min;
}

function randomInt(min, max) {
  return(Math.random() * (max-min)) + min;
}

// Create class for alien ships
class Ship {
  constructor(hull, firepower, accuracy){
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy;
  }
}

// Create factory for alien ships
class Factory {
  constructor(){
    this.ships = [];
  }
  generateShip(){
    const newShip = new Ship(getRandom(3,6), getRandom(2,4), randomInt(.6,.8));
    this.ships.push(newShip);
    return newShip;
  }
  findShip(){
    return this.ships;
  }
}

var ships = [];
for(i = 0; i < 6; i++){
  const ship = new Factory("Ship " + i)
  ship.generateShip();
  ships.push(ship);
}
alert(ships)

function attack() {

}

const game = () => {
  var start = prompt("The USS Schwarzenegger is surrounded by enemies. While the enemy has 6 ships, their Starkian adherence to honor states that they can only attack one at a time. We must attack now to catch them off guard. Do you concur? Yes/No");
  if(start == "yes" || "Yes"){
    attack();
  }
}

game();
