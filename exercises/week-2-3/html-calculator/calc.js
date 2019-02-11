var result = document.getElementsByClassName("result");

function add(e) {
  e.preventDefault();
  var add1 = document.addition.addNum1;
  var add2 = document.addition.addNum2;

  result[0].innerHTML = Number(add1.value) + Number(add2.value);
}

document.getElementById("addBtn").addEventListener('click', add)

function subtract(e) {
  e.preventDefault();
  var sub1 = document.subtraction.sub1;  
  var sub2 = document.subtraction.sub2;

  result[1].innerHTML = Number(sub1.value) - Number(sub2.value);
}

document.getElementById("subBtn").addEventListener('click', subtract);

function multiply(e) {
  e.preventDefault();
  var times1 = document.multiplication.times1;
  var times2 = document.multiplication.times2;

  result[2].innerHTML = Number(times1.value) * Number(times2.value);
}

document.getElementById("timesBtn").addEventListener('click', multiply);

function divide(e) {
  e.preventDefault();
  var divide1 = document.division.divide1;
  var divide2 = document.division.divide2;

  result[3].innerHTML = Number(divide1.value) / Number(divide2.value);
}

document.getElementById("divideBtn").addEventListener('click', divide);