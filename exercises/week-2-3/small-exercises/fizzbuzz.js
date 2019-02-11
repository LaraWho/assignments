// Write a function that returns an array containing the numbers 1 through 100 with the following stipulations:

// If the number is divisible by 3, it should be replaced by "fizz".
// If the number is divisible by 5, replace it with "buzz".
// If the number is divisible by both 3 and 5, replace it with "fizzbuzz".

fizzBuzz = () => {
  let obj = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
  }
  let arr = [];
  
  for(var i = 1; i <= 100; i++) {
    if((i % 5 === 0) && (i % 3 === 0)) {
      arr.push('fizz buzz')
      obj.fizzbuzz += 1

    } else if (i % 5 === 0) {
      arr.push('buzz')
      obj.buzz += 1

    } else if(i % 3 === 0) {
      arr.push('fizz')
      obj.fizz += 1

    } else {
      arr.push(i)
    }
  }
  return [arr, obj]
}
console.log(fizzBuzz())