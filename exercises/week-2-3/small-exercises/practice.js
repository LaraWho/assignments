antiCaps = str => {
  return str.split('').map((e,i) => {
    if(e === e.toUpperCase()) {
        return str.slice(i, 1, e.toLowerCase())
    } else if(e === e.toLowerCase()) {
        return str.slice(i, 1, e.toUpperCase())
    }
  }).join('')
}
console.log(antiCaps('Hello')) // hELLO
console.log(antiCaps('racEcar'))  // RACeCAR
console.log(antiCaps('bAnAnA'))  // BaNaNa

function largest(arr) {
  let sorted = arr.sort((a,b) => {
    return a - b
  })
  return sorted.slice(sorted.length - 1).toString();
}
// console.log(largest([3, 5, 2, 8, 1]));

lettersWithStrings = (arr, char) => {
  let newArr = []
  arr.forEach((e) => {
    if(e.includes(char)) {
      newArr.push(e)
    }
  })
  return newArr
}
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));
 // => ["C%4!", "Hey!"]

isDivisible = (num1, num2) => {
  return num1 % num2 === 0 ? true : false
}
// console.log(isDivisible(4, 2))  // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false