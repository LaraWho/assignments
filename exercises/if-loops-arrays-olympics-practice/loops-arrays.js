// Create a function called createEvenArray. It will have 1 parameter called highestNum where you will pass in the highest number that you want to create even numbers up to. Create a for loop inside that function that pushes all even numbers up to that highest number to that array. The function should return that array. Do not include the number 0

var returnArr = [];
function createEvenArray(highestNum) {
  for(var i = 1; i < highestNum; i++) {
    if(i % 2 === 0) {
      returnArr.push(i)
    }
  }
  return returnArr;
}
console.log(createEvenArray(7));

// Create a second function called addOdds that takes 1 parameter of type Array, call it evensOnlyArray. This function will iterate through that array (we are assuming that the array is all evens), examine each number, and then add the next odd number at the end of the array.

function addOdds(evensOnlyArray) {
  for(var i = 0; i < evensOnlyArray.length; i++) {
    // evensOnlyArray.push()
    console.log(evensOnlyArray[i])
  }
}
console.log(returnArr)
console.log(addOdds(returnArr));
