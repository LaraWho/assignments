// Write a function that generates a random password.

// The function should have a parameter that dictates the length of the password.
// The function may contain any upper and lower case characters.
// The function may contain any numbers and symbols.

// randomPasswordGenerator = num => {
//   return (Math.random() * num).toString(36).substring(2, num + 2);
// }
// console.log('8:',randomPasswordGenerator(8));
// console.log('5:', randomPasswordGenerator(5));


// Extra credit
// The password should have an additional parameter that accepts a string as an argument, whose characters are all found within the generated password.

randomPasswordGenerator = (num, str) => {
  return Math.random().toString(36).substring(2, num + 2);
}

console.log('8:',randomPasswordGenerator(8));
console.log('5:', randomPasswordGenerator(5));
