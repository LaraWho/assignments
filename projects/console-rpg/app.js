var ask = require("readline-sync");

var player = {
  name: '',
  health: 200,
  attack: function() {
    return Math.floor(Math.random() * 50) + 30
  },
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

Enemy.prototype.attackPoints = function() {
  var attacks = {
    low() {
      return Math.floor(Math.random() * 20) + 10
    },
    medium() {
      return Math.floor(Math.random() * 30) + 20
    },
    high() {
      return Math.floor(Math.random() * 40) + 30
    } 
  }
  return attacks[this.attack]()
}

var enemies = [
  davros = new Enemy('Davros', 'low', 175, 'Dalek Gunstick'),
  weepingAngel = new Enemy('Weeping Angel', 'low', 100, 'Stone Angel Hand'),
  missy = new Enemy('Missy', 'medium', 100, 'Sonic Umbrella'),
  master = new Enemy('The Master', 'high', 150, 'Insanity'),
  vashtaNerada = new Enemy('Vashta Nerada', 'high', 150, 'Fear of the Dark'),
  slitheen = new Enemy('Blon Fel Fotch Pasameer-Day Slitheen', 'low', 50, 'Huge claw and Toxic Gas')
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
ask.keyInPause(`\n As you are now the honorary Companion of The Doctor, here are the rules. \n You keep running, and fight at every opportunity. \n`)

//GAME TIME!

while(player.health > 0 && !player.hasWon) {

  // ask.keyInPause(`\n You're in the woods alien hunting with The Doctor, `)

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
          run()
        }
    }
}


function fiiight(alien) {
  var runAway = false

  while(alien.health > 0 && !runAway) {

    var randomNum = Math.floor(Math.random() * 5)
    var attack = ask.keyIn(`\n ATTACK![y] - OR - RUN AWAY![n]`, {limit: 'yn'})
      if(attack === 'y') {

        if(randomNum === 0) {
          console.log(`\n Woops! You missed! \n`)  
      
        } else if(randomNum === 1) {
            console.log(`\n That frying pan came in useful! \n Who knew Teflon also repels alien attacks?! \n`)

        } else {
          var alienAttack = alien.attackPoints()
          var playerDamage = player.attack()
          player.health -= alienAttack

          if(player.health <= 0) {
            console.clear()
            console.log(` \n Good job for failing The Doctor by dying. \n GAME OVER!`)
  
          } else {
            console.clear()
            console.log(`\n You managed to take ${playerDamage} points from ${alien.name}, who now has ${alien.health} health points left \n`)
        }
            alien.health -= playerDamage
            ask.keyInPause(`\n Are you ready for the retaliation??`)
            
            console.log(`\n Oh no! ${alien.name} really did a number on you!\n`)
            console.log(`\n You took ${alienAttack} damage. Your health is now ${player.health} \n Keep an eye on that \n `)
            
  }
        } else if(attack === 'n') {
          console.clear()
          var escapeOdds = Math.floor(Math.random() * 2)          
          if(escapeOdds === 1) {
            runAway = true
            run()
          } else {
            var runawayDamage = alien.attackPoints()
            player.health -= runawayDamage
            console.log(`\n You didn't escape fast enough so you lost ${runawayDamage} health points. Boo.`)
            runAway = true
            run()
        }
    }
    
  }
      if(alien.health <= 0) {
        var heroRecoup = alien.attackPoints()
        player.health += heroRecoup

        player.inventory.push(alien.weapon)
        var index = enemies.indexOf(alien)
        enemies.splice(index, 1)
        console.clear()
        console.log(`\n ${alien.name} is now dead and you have their ${alien.weapon}, and gained ${heroRecoup} health points from the thrill of the kill!`)
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
