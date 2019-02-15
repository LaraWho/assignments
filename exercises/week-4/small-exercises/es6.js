// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

// John is the pet owner, and his name should be stored differently than the other names.

const name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
  let name;
    for (var i = 0; i < pets.length; i++) {
        const pet = { 
          ype: pets[i] 
        }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}
console.log(runForLoop())


// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { 
          type: "carrot", 
          name: carrot 
        }
    })
}
console.log(mapVegetables(carrots));

// Task 2
// Re-write this .filter() using an arrow function:

const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

filterForFriendly = arr => {
  return arr.filter((person) => {
    return !person.friendly
  })
}
console.log(filterForFriendly(people))

// Task 3
// Re-write the following functions to be arrow functions:

doMathSum = (a, b) => a + b;

produceProduct = (a, b) => a * b;

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit
// Use template literals to build the string

printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => {
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString('Amy', 'Reid', 31))
console.log(printString())

// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

filterForDogs = (arr) => arr.filter((animal) => animal.type === "dog" ? true : false);
console.log(filterForDogs(animals));

// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

welcomeMsg = (location = 'New Zealand', name = 'Lara') => {
  return `
  Hi ${name}!

  Welcome to ${location}.

  I hope you enjoy your stay. Please ask the president of ${location} if you need anything.
  `
}
console.log(welcomeMsg('Canada', 'Frances'))