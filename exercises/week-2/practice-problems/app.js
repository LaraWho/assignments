let reverseStr = function(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr("Hello World"));

isNum = str => {
  return str == Number(str) ? true : false;
}
console.log('five:',isNum("five"));
console.log('5:',isNum("5"));
console.log('eleven:',isNum("eleven"));
console.log('34:',isNum("34"));

isEven = num => {
  return num % 2 === 0 ? true : false;
}
console.log('isEven:',isEven(12));
console.log('isEven:',isEven(7));

averageArray = arr => {
  return arr.reduce((total, num) => {
    return (total + num) / arr.length
  })
}
console.log('averageArr;', averageArray([1, 2, 3]));
console.log('averageArr;', averageArray([5, -10, 10, 20]));

// combineArrays = (arr1, arr2) => {
//   let newArr = []
//   arr1.forEach((e) => {
//     newArr.push(e)
//     arr2.map((e2,i2) => {
//       newArr.push(e2)
//     })
//   })
//   console.log(newArr)
//   return newArr
// }

combineArrays = (arr1, arr2) => {
  let newArr1 = []
  for(var i = 0; i < arr1.length; i++) {
    newArr1.push(arr1[i])
    for(var j = 0; j < arr2.length; j++) {
      console.log(arr2[j])
      newArr1.push(arr2[j])
    }
  }
  return newArr1
}
console.log(combineArrays( ["a", "b", "c"], [1, 2, 3]));

//Forception - loops within loops
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

forception = (people, alphabet) => {
  let newArr1 = []
  people.forEach((e) => {
    newArr1.push(`${e}:`)
    alphabet.split('').forEach((e2) => {
      newArr1.push(e2.toUpperCase())
    })
  })
  return newArr1
}
// console.log(forception(people, alphabet));

forception1 = (people, alphabet) => {
  let newArr2 = []
  for(var i = 0; i < people.length; i++) {
    newArr2.push(`${people[i]}:`)
    for(var j = 0; j < alphabet.length; j++) {
      newArr2.push(alphabet[j])
    }
  }
  return newArr2
}
// console.log(forception1(people,alphabet));