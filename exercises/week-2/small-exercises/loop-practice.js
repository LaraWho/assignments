strToArr = str => {
  let arr = []
  for(var i = 0; i < str.length; i++) {
    arr.push(str[i])
  }
  return arr
}
console.log(strToArr('hello'))

findChar = (str, char) => {
  return str.indexOf(char)
//   for(var i = 0; i < str.length; i++) {
//     if(str[i] === char) {
//       console.log(i)
//     } else {
//       console.log("character not found!") 
//   }
// }
}
console.log(findChar('hello', 'l'))

meaningOfLife = arr => {
   for(var i = 0; i < arr.length; i++) {
     if(arr[i] === 42) {
       console.log("Found 42!")
     } else {
       console.log("42 not found!")
     }
   }
}
console.log(meaningOfLife([11,22,33,42]))