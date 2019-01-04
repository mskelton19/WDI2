const dog = {
  name: "Chief",
  age: 5,
  toys: ['santa', 'half-chewed frisby', 'bone', 'duck'],
  friend: {
    name: "Millie",
    type: "Dog",
    toys: ["Orange Ring"]
  }
}

// console.log(dog.toys[1]);
//
// for(i = 0; i < dog.toys.length; i++){
//   console.log(dog.toys[i]);
// }

dog.toys.push('teeth cleaner');

console.log(dog.toys)

for(i = 0; i < dog.toys.length; i++){
  console.log(dog.toys[i]);
}

console.log(dog.friend.name);


// looping over objects
// print each key
const movie = { title: "Toy Story", company: "Pixar"}

for (let key in movie) {
  console.log(key);
}

// print each value
for (let key in movie) {
  console.log(movie[key]);
}

// Return an array of keys
console.log(Object.keys(movie));

// Print values
const keys = Object.keys(movie);

for(i = 0; i < keys.length; i++){
  console.log(movie[keys[i]]);
}
