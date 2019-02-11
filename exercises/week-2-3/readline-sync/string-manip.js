var ask = require("readline-sync");

console.log('Hello! My name is Lara! Tell me aaaall about yourself! \n');

var firstName = ask.question('What\'s your first name? \n');
console.log(`Hello ${firstName.toUpperCase()}!`);

var lastName = ask.question('Now what is your last name? \n');

var capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
var capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

console.log(`'${capitalizedFirstName.concat(` ${capitalizedLastName}`)}'...oh, that's...interesting...`);

var age = ask.questionInt('I\'m SUPER old. How old are you? \n');
console.log(`Wow! ${age} years old! Well done for living that long!`);

var text = ask.question('Tell me every single thing that\'s happened to you in your life. Leave nothing out. \n');
console.log(`${text.length >= 20 ? text.substring(text.length / 2) : text}`);

var cutText = ask.question(`You told me: \n "${text}" \n That's ${text.length} characters. \n At which character would you like me to repeat it back to you? \n`);
console.log(`Dunno why you wanted me to do that..but ok..! \n "${text.substring(cutText)}"`);