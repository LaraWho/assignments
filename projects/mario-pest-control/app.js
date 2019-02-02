var pestForm = document.pest_form;
// var total = 0;

function countPests(e) {
  e.preventDefault();
  var costPerG = Number(pestForm.goomba.value) * 5;
  var costPerB = Number(pestForm.bob_omb.value) * 7;
  var costPerC = Number(pestForm.cheep_cheep.value) * 11;
  var total = costPerG + costPerB + costPerC;

  document.getElementById("total").textContent = `${total}`;
}

document.getElementById("calculate").addEventListener('click', countPests);


// function countGoombas(e) {
//   e.preventDefault()
//   total = Number(pestForm.goomba.value) * 5
//   document.getElementById("total").textContent = `${total}`
// }
// document.getElementById("addGoomba").addEventListener('click', countGoombas);

// function countBob(e) {
//   e.preventDefault()
//   var total = Number(pestForm.bob_omb.value) * 5
//   document.getElementById("total").textContent = `${total}`
// }
// document.getElementById("addBob").addEventListener('click', countGoombas);