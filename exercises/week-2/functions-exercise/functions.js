// function sum(num1, num2) {
//   return num1 + num2
// }
// var getSum = sum(2, 2);
// console.log( {getSum} );

// function getLargestNum(num1, num2, num3) {
//   return Math.max(num1, num2, num3)
// }
// var resultGetLargestNum = getLargestNum(2, 15, 8)
// console.log( {resultGetLargestNum} );

// function oddOrEven(num) {
//   return num % 2 === 0 ? "even" : "odd";
// }
// var resultOddOrEven = oddOrEven(21)
// console.log( {resultOddOrEven} );

// function comparingStrings(str) {
//   var halfAString = str.substring(0, str.length / 2)
//   return str.length <= 20 ? `${str}${str}` : `${halfAString}`
// }
// var resultComparingStrings = comparingStrings("qwertyuiopasdfghjklzxcvbnm");
// console.log({resultComparingStrings});


// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// So if n were 6, the sum of 1+1+2+3+5+8 would be 21

// Don't hardcode the sequence.

function fibonacciSums(num) {
  var arr = [0, 1];
  for(var i = 2; i < num + 1; i++) {
    console.log(arr[i - 2] + arr[i - 1])
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr.reduce((acc, curr) => {
    return acc + curr
  })
}
var resultFibonacciSums = fibonacciSums(5)
console.log({resultFibonacciSums}) 

//  Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. ( White spaces count as a letter )

