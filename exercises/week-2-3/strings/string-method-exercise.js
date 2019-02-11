function capitalizeAndLowercase(str) {
  return str.toUpperCase() + str
}
// console.log(capitalizeAndLowercase('lara'));

function findMiddleIndex(str) {
  return Math.floor(str.length / 2);
}
// console.log(findMiddleIndex("Hello world"));

function returnFirstHalf(str) {
  return str.slice(0, str.length / 2);
}
// console.log(returnFirstHalf("hello world"))

function capitalizeAndLowercase1(str) {
  var firstHalf = str.toUpperCase().slice(0, str.length / 2)
  var lastHalf = str.slice(Math.floor(str.length / 2))

  return firstHalf + lastHalf
  // return str.length % 2 === 1 ? firstHalf.toUpperCase() + lastHalf : firstHalf.toUpperCase() + lastHalf
}
console.log(capitalizeAndLowercase1("hello world"))

// Make a function that takes any string and capitalizes any character that follows a space.
//capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

function capitalize(str) {
  var newArr = []
  str.split(' ').forEach(el => {
     newArr.push(el[0].toUpperCase() + el.slice(1))
  })
  return newArr.join(' ')
}
console.log('capitalize:', capitalize("hey friends! practice practice practice!"))