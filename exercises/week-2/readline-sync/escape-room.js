var ask = require("readline-sync");

options = ['Put hand in hole', 'Find the key', 'Open the door'];
options2 = ['Put hand in hole', 'Open the door'];

var index = ask.keyInSelect(options, 'Yikes! You\'re locked in a room! How do you get out?');
var haveKey = false;

if(options[index] === 'Find the key') {
  haveKey = true;
  var nextStep = ask.keyInSelect(options2, '\n What now?');
}

if(options[index] === 'Put hand in hole' || options2[nextStep] === 'Put hand in hole') {
  console.log('You dead');
}

if(haveKey && (options2[index] === 'Open the door' || options[nextStep] === 'Open the door')) {
    console.log('\n OMG, you know how to navigate a locked door!');
  }


if(!haveKey && (options2[index] === 'Open the door' || options[nextStep] === 'Open the door')) {
  // console.log('\n Get the key first!')
  ask.keyInSelect(options, '\n Oi! Get the key first! Start again!');
}

// switch(options[index] + options2[nextStep]) {
//       case 'Put hand in hole':
//         console.log('You dead')
//         break;

//       case ('Open the door' && haveKey):
//         console.log(haveKey)
//         console.log('\n OMG, you know how to navigate a locked door!')
//         break;

//       case ('Open the door' && !haveKey):
//         console.log(haveKey)
//         console.log('\n Get the key first!')
//         break;

//       case ('Find the key'):
//         haveKey = true;
//         console.log(haveKey)
//         console.log('\n Yay, you found the key!')
//         nextStep
//         // console.log(`${nextStep}`)
        
//         break;

//       default:
//         break;
//       }


// if(options[index] === 'Find the key') {
//   console.log(`\n You found the key!`);
//   haveKey = true;
//   ask.keyInSelect(options2, 'Now what?');

// } else if(options[index] === 'Open the door' && !haveKey) {
//   console.log(`\n You need the key, fool! \n`);
//   ask.keyInSelect(options, `\n Start again! \n`);

// } else if(options[index] === 'Open the door' && haveKey) {
//   console.log(`\n Yay! You're free!`);

// } else if(options[index] === 'Put hand in hole') {
//   console.log(`\n You dead. This is over.`);
// }

// if(options2[index] === 'Open the door' && haveKey) {
//   console.log(`\n Yay! You're free!`);

// } else if(options2[index] === 'Open the door' && !haveKey) {
//   console.log(`\n You need the key, fool! \n`);
//   ask.keyInSelect(options, `\n Start again! \n`);

// } else if(options2[index] === 'Put hand in hole') {
//   console.log(`\n You dead. This is over.`);
// }



