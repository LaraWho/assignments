function sayHello(name, age) {
  console.log(`Hello, ${name}! You have lived ${age} years! Well done!`);
}
// sayHello('Lara', 30);

var shopper = {
  name: 'Lara',
  age: 30,
  isCheap: true,
  groceryCart: ['pasta', 'red wine', 'bananas', 'spinach'],
  getStatus : function() {
     if(this.isCheap) {
       console.log(`${this.name} is too cheap to shop here`)
     } else {
      console.log(`Let ${this.name} shop!`)
     }
   }
}

// shopper.getStatus()
// console.log(shopper.groceryCart[1], 'is delicious')

// for(var i = 0; i < 101; i++) {
//   console.log(i % 2 === 0 ? i + ' Even' : `${i}: Odd`)
// }
// `${i}: Even`

