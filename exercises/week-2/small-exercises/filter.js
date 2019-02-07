// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  return arr.filter(el => {
    return el >= 5
  })
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  return arr.filter(el => {
    return el % 2 === 0
  })
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(el => {
    return el.length <= 5
  })
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(el => {
    return el.member
  })
}
console.log('peopleWhoBelongToTheIlluminati:',peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]));

// Filter out all the people who are not old enough to see The Matrix (younger than 18)
function ofAge(arr){
  return arr.filter(el => {
    return el.age >= 18
  })
}
console.log('ofAge:',ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));