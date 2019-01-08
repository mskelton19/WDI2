class Person {
  constructor(name, age, eyes, hair){
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
  greet(){
    console.log("hi")
  }
  wave(){
    console.log("**waves**")
  }
};

const me = new Person();
const emma = new Person('Emma', 28, 'blue', 'brown');
emma.wave();
me.greet();

console.log(emma);
