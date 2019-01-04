// Data structures that can store data with greater specificity
// Represent key-value pairs

const car = { color: "blue", hp: 400, year: 1999};
// objects used named keys as opposed to ordered indexes
// each peice of data is bound to its key, rather than an index.
// Not sequential

console.log(car);
console.log(car.color);
// dot notation
console.log(car['color']);
// bracket-quote notation

const dog = { name: 'Chief', age: 5, color: 'black', favoriteToy: 'Half-chewed frisby' }

console.log(dog);
console.log(dog.favoriteToy);

dog.nickname = 'Beefy';

console.log(dog);
dog.bestFriend = 'Millie';
dog.isHappy = true;

console.log(dog);

dog.age = 4;

console.log(dog);

const name = "Millie";
const age = 5;

const dog2 = { name, age}

console.log(dog2);

// Objects can't have more than one key with the same name
// If it does, it will revert to the last key with the same name
