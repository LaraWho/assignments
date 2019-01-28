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


// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

var arr = [2, 5, 435, 4, 3] // "The light is on"
var arr1 = [1, 1, 1, 1, 3]   // "The light is on"
var arr2 = [9, 3, 4, 2]      // "The light is off"

var light = false;
for(var i = 0; i < arr2.length; i++) {
  if(arr[i] % 2 === 1) {
    light = !light
  } else {
    light
  }
}
console.log(light ? "The light is on" : "The light is off");


var num = arr1.reduce((acc, curr) => {
  return acc + curr
})
if(num % 2 === 1) {
  console.log("The light is on")
} else {
  console.log("The light is off")
}