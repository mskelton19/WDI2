const clicker = {
  clickCount: 0,
  click() {
    this.clickCount += 1
    return this.clickCount
  }
}

const myInformation = {
    name: 'Mike',
    age: 29,
    fact: "I work at a data analytics company",
    statement() {
      return "My name is " + this.name + ". I am " + this.age + " and " + this.fact
    },
    incAge() {
      return this.age + 1
    },
    changeName(newName) {
      return this.name = newName
    }
}

// console.log(myInformation.statement());
// console.log(myInformation.incAge());
// console.log(myInformation.changeName('Mikey'))

const greeter = {
  hello(name) {
    return "Hi there " + name + "."
  },
  goodbye(name) {
    return "Arrivederci, " + name;
  }
}

// console.log(greeter.hello("Mike"))
// console.log(greeter.goodbye("Emma"))

const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

for (i = 0; i < sheepShearers.sheepCount.length; i++){
  console.log(i);
}
