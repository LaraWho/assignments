function sayHello(name, age) {
  console.log(`Hello, ${name}! You have lived ${age} years! Well done!`);
}
// sayHello('Lara', 30);

var shopper = {
  name: 'Lara',
  age: 30,
  isCheap: true,
  groceryCart: ['pasta', 'red wine', 'bananas', 'spinach'],
  getStatus : function() {
     if(this.isCheap) {
       console.log(`${this.name} is too cheap to shop here`)
     } else {
      console.log(`Let ${this.name} shop!`)
     }
   }
}

// shopper.getStatus()
// console.log(shopper.groceryCart[1], 'is delicious')

// for(var i = 0; i < 101; i++) {
//   console.log(i % 2 === 0 ? i + ' Even' : `${i}: Odd`)
// }
// `${i}: Even`

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for(var i = 0; i < officeItems.length; i++) {
  officeItems[i] === 'computer' ? count += 1 : null
}
// console.log(`There are ${count} computers in this array!`)

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

peopleWhoWantToSeeMadMaxFuryRoad.forEach(e => {
  if(e.age >= 18 && e.gender === "female" ) {
    console.log(`${e.name} is old enough. SHE'S good to see Mad Max Fury Road`)
  } if(e.age >= 18 && e.gender === "male") {
    console.log(`${e.name} is old enough. HE'S good to see Mad Max Fury Road`)
  } if(e.age < 18 && e.gender === "female") {
    console.log(`${e.name} is not old enough. Don't let HER in!`)
  } else if(e.age < 18 && e.gender === "male") {
    console.log(`${e.name} is not old enough. Don't let HIM in!`)
  }
})

