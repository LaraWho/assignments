var ask = require("readline-sync");

function add(firstNum, secondNum) {
  console.log(`The result is: ${Number(firstNum) + Number(secondNum)}`);
}

function subtract(firstNum, secondNum) {
  console.log(`The result is: ${Number(firstNum) - Number(secondNum)}`);
}

function multiply(firstNum, secondNum) {
  console.log(`The result is: ${Number(firstNum) * Number(secondNum)}`);
}

function divide(firstNum, secondNum) {
  console.log(`The result is: ${Number(firstNum) / Number(secondNum)}`);
}

var firstNum = ask.question('Please enter a number \n');
var secondNum = ask.question('Please enter your second number \n');

operations = ['+', '-', '*', '/']
var operation = ask.keyInSelect(operations, `What maths would you like to do with ${firstNum} and ${secondNum}?`);

if(operations[operation] === '+') {
  add(firstNum, secondNum);
} else if(operations[operation] === '-') {
  subtract(firstNum, secondNum);
} else if(operations[operation] === '*') {
  multiply(firstNum, secondNum);
} else if(operations[operation] === '/') {
  divide(firstNum, secondNum);
};
