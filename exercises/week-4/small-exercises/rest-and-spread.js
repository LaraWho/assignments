// Rest and Spread Operator

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
      function collectAnimals(...animals) {  
          return animals
      }
      // console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "rat")); 
  // ["dog", "cat", "mouse", "jackolope", "platypus", "rat"]


// Write a function that returns a food object with the array names as properties using Object Literals:
      combineFruit = (fruit, sweets, vegetables) => {
          return {fruit, sweets, vegetables}
      }

      // console.log(combineFruit(["apple", "pear"],
      //             ["cake", "pie"],
      //             ["carrit"]))

// Use destructuring to fill in the blanks and use the property names as variables:
      const vacation = {  
        location: "Burly Idaho",
        duration: "2 weeks"
      };
      const { location, duration } = vacation

      function parseSentence(){
        return `We're going to have a good time in ${location} for ${duration}`
      }
      // console.log(parseSentence())

// Use destructuring to make this code ES6:
      function returnFirst(items){
          const {firstItem} = items; /*change this line to be es6*/
          return firstItem
      }

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
  const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, ${thirdFav}.`
}
// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always receive three arrays if you would like to.

function combineAnimals(...arr) {  
 return arr.map((e) => {
   return [...e].join(', ')
 })
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

["dog", "cat", "mouse", "jackolope", "platypus"]


// Try to make the following function more ES6xy:

product = (...numbers) => {  
  var numbers = [a,b,c,d,e];
        return numbers.reduce((acc, number) => {
          return acc * number;
        }, 1)
    }

// Make the following function more ES6xy. Use at least both the rest and spread operators:
      unshift = (array, ...numbers) => {  
        return [...array, ...numbers];
      }

// Write some destructuring code to help this function out. Use object literals to simplify it:

      populatePeople = (names) => {
          return names.map((name) => {
            name = name.split(" ");
            let [firstName, lastName] = name
              return {
                  firstName,
                  lastName
              }
          })
      }

      // console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]