////CONDITIONALS

////PRELIMINARIES
// if(5 > 3) {
//   console.log("is greater than")
// }

// if("cat".length === 3) {
//   console.log("is the length")
// }

// console.log("cat" === "dog" ? "the same" : "not the same")

////BRONZE
// var person = {
//   name: "Bobby",
//   age: 12
// }
// console.log(person.age >= 18 ? `${person.name} is allowed to go to the movie` : `${person.name} is NOT allowed to go to the movie`);

// var name = person.name.toLowerCase()
// console.log(name.startsWith("b") ? `${person.name} is allowed to go to the movie` : `${person.name} is NOT allowed to go to the movie`);

// console.log(person.age >= 18 && person.name.startsWith("B") ? `${person.name} is allowed to go to the movie` : `${person.name} is NOT allowed to go to the movie`);


////SILVER
// if(1 === "1") {
//   console.log("strict")
// } else if(1 == "1") {
//   console.log("loose")
// } else {
//   "not equal at all"
// }

// if((1 <= 2 && 2 === 4) || (3 * 4) > 10 && 5 + 10 > 10) {
//   console.log("yes");
// } 

////GOLD 
// if(typeof "dog" == "string") {
//   console.log(typeof "dog");
// }

// if(typeof "true" == "boolean") {
//   console.log("tis indeed a boolean!");
// } else {
//   console.log("nope")
// }

// console.log(typeof true == "boolean" ? "tis indeed a boolean!" : "nope");

// var str = "s".charCodeAt();
// var num = 12;
// console.log(str)
// if(str > num) {
//   console.log(`Yes: ${str} is bigger than ${num}`);
// } else {
//   console.log(`Nope: ${str} is NOT bigger than ${num}`);
// }

// var myNum = 10;
// console.log(myNum % 2 === 0 ? "even" : "odd");

  //// -------------------------

////LOOPS

////PRELIMINARIES
// for(var i = 0; i < 10; i++) {
//   console.log(i)
// }

// for(var j = 9; j >= 0; j--) {
//   console.log(j)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i])
// }

////BRONZE
// var nums = []
// for(var i = 0; i < 10; i++) {
//   nums.push(i)
// }
// console.log(nums)

// for(var i = 0; i <= 100; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var newArr = []

// fruit.forEach((e,i) => {
//   i % 2 === 1 ? newArr.push(e) : null
// })
// console.log(newArr)

////SILVER
// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]
// 1
// peopleArray.forEach(person => {
//   console.log(person.name)
// })

// var jobs = [];
// var names = [];
// peopleArray.forEach(person => {
//   jobs.push(person.occupation)
//   names.push(person.name)
// })
// console.log({jobs}, {names});

// var someJobs = [];
// var someNames = [];
// peopleArray.forEach((e, i) => {
//   i % 2 === 0 ? someNames.push(e.name) : someJobs.push(e.occupation)
// })
// console.log({someJobs}, {someNames})

////GOLD

// for(var i = 0; i <= 3; i++) {
//   var subArr = Array(i).fill([0,0,0])
// }
// console.log("[[" + subArr[0] + "],")
// console.log("[" + subArr[1] + "],")
// console.log("[" + subArr[2] + "]]")

// let arr = []
// for(var i = 0; i < 3; i++) {
//   arr.push([0,0,0])
// }
// console.log(arr)

//// 2.Create an array that mimics a grid like the following using for loops:
//// [[0, 0, 0], 
//// [1, 1, 1], 
//// [2, 2, 2]]

// var arr1 = []
// for(var i = 0; i < 3; i++) {
//   arr1.push([i,i,i])
// }
// console.log({arr1})

//// 3.Create an array that mimics a grid like the following using for loops:
//// [[0, 1, 2], 
//// [0, 1, 2], 
//// [0, 1, 2]]

// var arr2 = []
// for(var i = 0; i <= 3; i++) {
//   arr2 = Array(i).fill([0,1,2])
// }
// console.log(arr2)

// var newArr = []
// for(var i = 0; i < arr2.length; i++) {
//   newArr += arr2[i].toString().replace(arr2[i], 'x')
//   for(var j = 0; i < arr2[i].length; j++) {
//     newArr += arr2[i].toString().replace(arr2[i], 'x')
//   }
// }
// console.log(newArr)

////Given a grid like the previous ones, write a for loop that would change every number to an x.

// var newArr = []
// arr.map((e) => {
//   e.forEach(el => {
//     newArr.push(Array(3).fill(el.toString().replace('0', 'x')))
//   })
// })
// console.log("[[" + newArr[0] + "],")
// console.log("[" + newArr[1] + "],")
// console.log("[" + newArr[2] + "]]")