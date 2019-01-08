// Spacebattle game

const ussSchwarzenegger = {
  name: 'USS Schwarzenegger',
  hull: 20,
  firepower: 20,
  accuracy: .7
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+ 1)) + min;
}

function randomInt(min, max) {
  return(Math.random() * (max-min)) + min;
}

class alienShips {
  constructor(number, hull, firepower, accuracy){
    this.number = number,
    this.hull = hull,
    this.firepower = firepower,
    this.accuracy = accuracy
  }
}

var ships = [];

for(i = 1; i <= 6; i++){
  const ship = new alienShips(i, getRandom(3,6), getRandom(2,4), randomInt(.6,.8))
  ships.push(ship)
}

function attack() {
  if(ships[1].hull > 0){
    console.log("Ship 1")
  }
}

function game() {
  var answer = prompt("Welcome captain. Shall we attack the first ship?");
  if(answer == 'yes' || 'Yes'){
    alert("well alright")
  }
}

console.log(ships)

game();
