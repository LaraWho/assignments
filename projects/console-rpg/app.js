var ask = require("readline-sync");

var player = {
  name: '',
  health: 300,
  attack: Math.floor(Math.random() * 50) + 30,
  inventory: ['dirty hanky', 'frying pan'],
  hasWon: false
}

function listInventory() {
  return player.inventory.map(item => {
    return  ` ${item}`
  })
}

function Enemy(name, attack, health, weapon) {
  this.name = name,
  this.attack = attack,
  this.health = health,
  this.weapon = weapon
}

var attacks = {
  lowAttackPoints: Math.floor(Math.random() * 20) + 10,
  medAttackPoints: Math.floor(Math.random() * 30) + 20,
  highAttackPoints: Math.floor(Math.random() * 40) + 30,
}

var enemies = [
  davros = new Enemy('Davros', attacks.lowAttackPoints, 175, 'Dalek Gunstick'),
  weepingAngel = new Enemy('Weeping Angel', attacks.lowAttackPoints, 100, 'Stone Angel Hand'),
  missy = new Enemy('Missy', attacks.medAttackPoints, 100, 'Sonic Umbrella'),
  master = new Enemy('The Master', attacks.highAttackPoints, 150, 'Insanity'),
  vashtaNerada = new Enemy('Vashta Nerada', attacks.highAttackPoints, 150, 'Fear of the Dark'),
  slitheen = new Enemy('Blon Fel Fotch Pasameer-Day Slitheen', attacks.lowAttackPoints, 50, 'Huge claw and Toxic Gas')
]

//STORY STARTS

console.log(`\n You're walking in the woods
\n There's no one around and your phone is dead`)

var choice = ask.keyIn(`\n You hear a strange wheezing whirring sound about 30 feet back 
\n You walk towards it (of course you would) and hide behind a tree.
\n Do you peek around the tree to see what made the noise[y]? Or do you walk deeper into the woods[n]? \n`, {limit: 'yn'})

  if(choice === 'n') {
    console.log(`\n It's Shia LaBeouf! You shouldn't have been out in the woods...this is a rendition of your fate: \n https://www.youtube.com/watch?v=o0u4M6vppCI \n`)
    return;
  }

    console.log(`\n`);
    console.log(`\n`);
    console.log(`\n`);

    console.log('                       ____                          '); 
    console.log('                       |  |                          ');
    console.log('              _________|__|_________                 ');
    console.log('             |______________________|                ');
    console.log('              |  _______  _______  |                 ');
    console.log('              | |   |   ||   |   | |                 ');
    console.log('              | |   |   ||   |   | |                 ');
    console.log('              | |---|---||---|---| |                 ');
    console.log('              | |   |   ||   |   | |                 ');
    console.log('              | |___|___||___|___| |                 ');
    console.log('              |  _______  _______  |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |_______||_______| |                 ');
    console.log('              |  _______  _______  |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('              | |       ||       | |                 ');
    console.log('             _| |_______||_______| |_                ');
    console.log('            |________________________|               ');
    console.log('            |________________________|               ');


player.name = ask.question(`\n It's the TARDIS! The Doctor stumbles out and begins talking at you, \n \n 'That was quite a landing! I'm in a hurry! There are aliens all over this forest and there's a band of ramblers headed in this direction! \n Quick, quick, what's your name?!' \n`)

// You answer, and compliment him on his bow-tie.
console.log(`\n 'Hello ${player.name}! You're right, bow ties ARE cool. I keep telling everyone but no one listens...Well come along!' \n`)
console.clear()
console.log(`\n As you are now the honorary Companion of The Doctor, here are the rules. \n You keep running, and fight at every opportunity. \n`)

//GAME TIME!

while(player.health > 0 && !player.hasWon) {
  var decisionTime = ask.keyIn(` \n I know you're not really into cardio but do you keep running with The Doctor[r]? Or stop to check your pockets[p]? `, {limit: 'rp'})

  if(decisionTime === 'r') {
    run()

    } else {
      console.clear()
      console.log(`\n You are ${player.name}, you have: ${listInventory()} to use when in a fight with an alien, and ${player.health} health points \n`)
  }

function run() {
  var random = Math.floor(Math.random() * 3)

  if(random === 2) {
      alienEncounter()

  } else {
    console.log(`\n The Doctor shouts at you to keep up the pace. \n`)
  }
}

function alienEncounter() {
  console.clear()

  var action = ask.keyIn(`\n We finally stopped running! But yikes, there's an aggressive looking beastie! You have ${player.health} health points left. Run awaaay[a] or Fight[f]?!`, {limit: 'af'})

    if(action === 'f') {
      var selectedAlien = Math.floor(Math.random() * enemies.length)      
        console.log(`\n ${enemies[selectedAlien].name} is gearing up for a fight!`)
        fiiight(enemies[selectedAlien])

    } else {
        var escapeOdds = Math.floor(Math.random() * 2)
        if(escapeOdds === 1) {
          run()
        } else {
          player.health -= 20
          console.log(`\n You didn't escape fast enough so you lost 20 health points. Boo.`)
        }
    }
}

function fiiight(alien) {

  while(alien.health > 0) {

    var randomNum = Math.floor(Math.random() * 5)
    var attack = ask.keyIn(`\n ATTACK![y] - OR - RUN AWAY![n]`, {limit: 'yn'})
      if(attack === 'y') {

        if(randomNum === 2) {
          console.log(`\n Woops! You missed! \n`)  
      
        } else if(randomNum === 3) {
            console.log(`\n That frying pan came in useful! \n Who knew Teflon also repels alien attacks?! \n`)

        } else {
          player.health -= alien.attack
          alien.health -=player.attack
    
            if(alien.health <= 0) {
              player.health += 20
              player.inventory.push(alien.weapon)
              var index = enemies.indexOf(alien)
              enemies.splice(index, 1)
              console.log(`\n ${alien.name} is now dead and you have their ${alien.weapon}, and gained 20 health points from the thrill of the kill!`)
    
            } else {
              console.log(`\n You managed to take ${player.attack} points from ${alien.name}, who now has ${alien.health} health points left`)
            } 
            
              if(player.health <= 0) {
                console.log(` \n Good job for failing The Doctor by dying. \n GAME OVER!`)
      
            } else {
              console.log(`\n That was rough, you took ${alien.attack} damage. Your health is now ${player.health} \n Keep an eye on that \n `)
            }
  }
        } else if(attack === 'n') {
          var escapeOdds = Math.floor(Math.random() * 2)          
          if(escapeOdds === 1) {
            run()
          } else {
            player.health -= 20
            console.log(`\n You didn't escape fast enough so you lost 20 health points. Boo.`)
            run()
        }
    }
    
  }
  if(!enemies[0]) {
    console.clear()

    console.log(`\n YAY! There are no more aliens in the woods! The approaching ramblers can ramble in peace! \n The Doctor shouts some gibberish about wibbly wobbly timey wimey stuff while he runs back to the TARDIS without a word of thanks. \n You tut and mutter to yourself as you drag your stump leg through the woods... \n `)
    console.log(`\n END OF THE GAME \n Thank you for playing, ${player.name}!`)
    player.hasWon = true
  }
}

};

  var finalRequest = ask.keyIn(`\n Would you like to see your end game stats[y]? Or no[n]?`, {limit: 'yn'})
  if(finalRequest === 'y') {
    var enemyList = enemies.map(enemy => {
      return ` ${enemy.name}`
    })

  console.log(`\n You were ${player.name}, you had ${player.health} health points, and these items: ${listInventory()}.
  You had these enemies left to defeat: ${!enemyList[0] ? `none, you killed them all!` : enemyList}`)

}
