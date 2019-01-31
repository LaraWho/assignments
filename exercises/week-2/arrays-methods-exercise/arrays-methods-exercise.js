var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop(); //remove last item
fruit.shift(); //remove first item
fruit.push(fruit.indexOf('orange')); //find index of orange + add that number to the end of the fruit array
vegetables.push(vegetables.length) //find length of vegetable array and add it to end of vegetables array
var food = fruit.concat(vegetables) //put the two arrays together, fruit first. assign to var food.
food.splice(4, 2); //remove 2 elements starting at index 4
food.reverse(); //reverse the array
console.log(food.join(',')); //return the new array as a string

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food)