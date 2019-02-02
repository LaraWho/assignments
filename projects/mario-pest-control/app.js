var pestForm = document.pest_form;

function countPests(e) {
  e.preventDefault();
  var costPerG = Number(pestForm.goomba.value) * 5;
  var costPerB = Number(pestForm.bob_omb.value) * 7;
  var costPerC = Number(pestForm.cheep_cheep.value) * 11;
  var totalPrice = costPerG + costPerB + costPerC;
  
  document.getElementById("total").textContent = `${totalPrice} coins`;
  document.getElementById("breakdown").innerHTML = `
  <strong>price breakdown</strong> 
  <div>
    ${costPerG} for Goombas <br>
    ${costPerB} for Bob-ombs <br>
    ${costPerC} for Cheep-cheeps
  </div>`;
}
document.getElementById("calculate").addEventListener('click', countPests);