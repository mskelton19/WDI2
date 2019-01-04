class Person {
  constructor(name, age, eyes, hair){
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
  setHair(hairColor){
    this.hair = hairColor;
  }
  greet(otherPerson){
    console.log('hi ' + otherPerson + '!');
  }
  jump(){
    console.log("40 inch verticle")
  }
};

const me = new Person('Mike', 29, 'hazel', 'brown');
me.setHair('black');

class SuperHero extends Person {
  constructor(name, age, eyes, hair){
    super(name, age, eyes, hair);
    this.superPowers=['money']
  }
  fly(){
    console.log("up up and away!!")
  }
};

const SuperMan = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(SuperMan);
SuperMan.fly();

const BatMan = new SuperHero('Bat Man', 29, 'brown', 'black');

console.log(BatMan);

// Create a Factory

// class Car {
//   constructor(maker, serialNumber){
//     this.maker = maker;
//     this.serialNumber = serialNumber;
//   }
//   drive(){
//     console.log("vroom");
//   }
// }
//
// class Factory {
//   constructor(company){
//     this.company = company;
//     this.cars = [];
//   }
//   generateCar(){
//     const newCar = new Car(this.cars.length);
//     this.cars.push(newCar);
//     return newCar;
//   }
//   findCar(index){
//     return this.cars[index];
//   }
// }
//
// const ford = new Factory('Ford');
// ford.generateCar();
// console.log(ford);
// console.log(ford.findCar(0));

class Car {
	constructor(maker, serialNumber){
		this.maker = maker
		this.serialNumber = serialNumber;
	}
	drive(){
		console.log('Vroom');
	}
}
class Factory {
	constructor(company){
		this.company = company;
		this.cars = [];
	}
	generateCar(){
		const newCar = new Car(this.company, this.cars.length);
		this.cars.push(newCar);
		return newCar;
	}
	findCar(index){
		return this.cars[index];
	}
}
const toyota = new Factory("Toyota");
const bmw = new Factory("BMW");
toyota.generateCar();
bmw.generateCar();
console.log(bmw.findCar(0));
console.log(toyota.findCar(0));
