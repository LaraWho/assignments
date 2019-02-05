var ask = require("readline-sync");

options = ['Put hand in hole', 'Find the key', 'Open the door'];
var response = ask.keyInSelect(options, '\n Yikes! You\'re locked in a room! How do you get out?');

var haveKey = false;
var trapped = true;


while(trapped) {
  if(options[response] === 'Find the key') {
    console.clear()
    haveKey = true;
    var foundKey = ask.keyInSelect(options, '\n Yay! You have the key!');
      if(options[foundKey] === 'Open the door') {
        console.clear()
        console.log('\n OMG, you know how to navigate a locked door! YOU ARE FREEEEEEEEE!');
        trapped = false;
    } else if(options[foundKey] === 'Put hand in hole') {
        console.clear()
        console.log('\n You dead');
        trapped = false;
    }
  } 
  else if(options[response] === 'Open the door') {
        console.clear()
      if(!haveKey) {
        console.clear()
        var responseInOpenDoor = ask.keyInSelect(options, '\n Oi! Get the key first! Start again!');
         if(options[responseInOpenDoor] === 'Put hand in hole') {
            console.clear()
            console.log('\n You dead');
            trapped = false;
        } if(options[responseInOpenDoor] === 'Find the key') {
            console.clear()
            var responseInFindKey = ask.keyInSelect(options, '\n You found the key!!!');
            if(options[responseInFindKey] === 'Open the door') {
              console.clear()
              console.log('\n OMG, you know how to navigate a locked door! YOU ARE FREEEEEEEEE!');
              trapped = false;
            } else if(options[responseInFindKey] === 'Put hand in hole') {
              console.clear()
              console.log('\n You dead');
              trapped = false;
            }
        }
    } 
  }
    else if(options[response] === 'Put hand in hole') {
        console.clear()
        console.log('\n You dead');
        trapped = false;
      }
}