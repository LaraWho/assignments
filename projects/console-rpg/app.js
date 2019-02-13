var ask = require("readline-sync");

var player = {
  name: '',
  health: 350,
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
  anneDroid = new Enemy('The Anne Droid', 'medium', 150, 'Biting Wit'),
  davros = new Enemy('Davros', 'low', 175, 'Dalek Gunstick'),
  weepingAngel = new Enemy('Weeping Angel', 'low', 100, 'Stone Angel Hand'),
  missy = new Enemy('Missy', 'medium', 100, 'Sonic Umbrella'),
  master = new Enemy('The Master', 'high', 150, 'Insanity'),
  vashtaNerada = new Enemy('Vashta Nerada', 'high', 150, 'Flesh Eating Mouth'),
  slitheen = new Enemy('Blon Fel Fotch Pasameer-Day Slitheen', 'low', 50, 'Huge claw and Toxic Gas'),
  cyberman = new Enemy('Cyberman', 'medium', 100, 'Strong Grip')
]

//STORY STARTS

console.log(`\n \x1b[1;33m You're walking in the woods
\n There's no one around and your phone is dead`)

var choice = ask.keyIn(`\n You hear a strange wheezing whirring sound about 30 feet back 
\n You walk towards it (of course you would) and hide behind a tree.
\n Do you peek around the tree to see what made the noise[y]? Or do you walk deeper into the woods and quit[q]? \n`, {limit: 'yq'})

  if(choice === 'q') {
    console.log(`\n \x1b[1;31m It's Shia LaBeouf! You shouldn't have been out in the woods...this is a rendition of your fate: \n https://www.youtube.com/watch?v=o0u4M6vppCI \n \x1b[0m`)
    return;
  }
    console.log(`\n \x1b[1;34m `);
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


player.name = ask.question(`\n \x1b[1;33m It's the TARDIS! The Doctor stumbles out and begins talking at you, \n \n 'That was quite a landing! I'm in a hurry! There are aliens all over this forest and there's a band of ramblers headed in this direction! \n Quick, quick, what's your name?!' \n`)

// You answer, and compliment him on his bow-tie.
console.log(`\n 'Hello ${player.name}! You're right, bow ties ARE cool. I keep telling everyone but no one listens...Well come along!' \n`)
ask.keyInPause(`\n \x1b[1;34m As you are now the honorary Companion of the Doctor, here are the rules. \n You keep running, and fight at every opportunity. \n`)

//GAME TIME!

while(player.health > 0 && !player.hasWon) {

  var decisionTime = ask.keyIn(` \n \x1b[1;32m
  Remember, we need to rid these woods of mean aliens before that group of ramblers gets here!
  The Doctor can't do it alone, he needs you and your frying pan to help!
  \n I know you're not really into cardio but do you keep running with the Doctor[r]? Or stop to check your pockets[p]? Or would you like to [q]quit on the Doctor?? (and forever be damned!) \x1b[0m \n`, {limit: 'rpq'})

  if(decisionTime === 'r') {
    run()

    } else if(decisionTime === 'p') {
      // console.clear()
      console.log(`\n \x1b[1;35m You are ${player.name}, you have: ${listInventory()} to use when in a fight with an alien, and ${player.health} health points \n`)
  } else if(decisionTime === 'q') {
      // console.clear()
      console.log(`\n \x1b[1;31m You left the Doctor in his hour of need, and also, those ramblers all died. I hope you're happy now. They had children, and grandchildren. \x1b[0m`)
      break
  }

function run() {
  var random = Math.floor(Math.random() * 3)

  if(random === 2) {
      alienEncounter()
  } else {
      console.log(`\n \x1b[1;34m The Doctor shouts at you to keep up the pace. \n`)
  }
}

function alienEncounter() {
  console.clear()

  var action = ask.keyIn(`\n \x1b[1;32m We finally stopped running! But yikes, there's an aggressive looking beastie! You have ${player.health} health points left. Run awaaay[a] or Fight[f]?! \x1b[0m`, {limit: 'af'})

    if(action === 'f') {
      var selectedAlien = Math.floor(Math.random() * enemies.length)      
        console.log(`\n \x1b[1;31m ${enemies[selectedAlien].name} is gearing up for a fight!`)
        fiiight(enemies[selectedAlien])

    } else if(action === 'a') {
        var escapeOdds = Math.floor(Math.random() * 2)
        if(escapeOdds === 1) {
          console.log(`\n \x1b[1;33m Phew, they didn't see you!`)
          run()
        } else {
          player.health -= 20
          console.log(`\n \x1b[1;31m You didn't run fast enough and the beastie whipped away 20 health points as you fled.`)
            if(player.health <= 0) {
              youDead()
            } else {
              run()
            }
        }
    }
}


function fiiight(alien) {
  var runAway = false

  while(alien.health > 0 && !runAway && player.health > 0) {

    var attack = ask.keyIn(`\n \x1b[1;32m ATTACK![a] - OR - RUN AWAY![r] \x1b[0m`, {limit: 'ar'})
    var randomNum = Math.floor(Math.random() * 5)
      if(attack === 'a') {
        
        if(randomNum === 0) {
            console.log(`\n \x1b[1;31m You missed! How could you miss!? \n`)

        } else if(randomNum === 1) {
            console.log(`\n \x1b[1;31m That frying pan came in useful! \n  Who knew Teflon also repels alien attacks?! \n`)

        } else {
          var alienAttack = alien.attackPoints()
          var playerDamage = player.attack()
          player.health -= alienAttack
          alien.health -= playerDamage

          if(alien.health <= 0) {
            player.health += alienAttack

            player.inventory.push(alien.weapon)
            var index = enemies.indexOf(alien)
            enemies.splice(index, 1)
            
            console.log(`\n \x1b[1;31m ${alien.name} is now dead and you have their ${alien.weapon}, and gained ${alienAttack} health points from the thrill of the kill!`)
            break
          }

          if(player.health <= 0) {
            youDead()
            break
          } else {
            console.log(`\n \x1b[1;31m You managed to take ${playerDamage} points from ${alien.name}, who now has ${alien.health} health points left \n`)
          }
            ask.keyInPause(`\n \x1b[1;32m Are you ready for the retaliation??`)
            
            console.log(`\n \x1b[1;31m Oh no! ${alien.name} used their ${alien.weapon} and really did a number on you!\n`)
            console.log(`\n  You took ${alienAttack} damage. Your health is now ${player.health} \n  Keep an eye on that \n `)
            
  }
        } else if(attack === 'r') {
          var escapeOdds = Math.floor(Math.random() * 2)          
          if(escapeOdds === 1) {
            console.log(`\n \x1b[1;33m Phew, you got away!`)
            runAway = true
            run()
          } else {
            var runawayDamage = alien.attackPoints()
            player.health -= runawayDamage
            console.log(`\n \x1b[1;31m You didn't escape fast enough so you lost ${runawayDamage} health points. Boo.`)
            if(player.health <= 0) {
              youDead()
              break
            } else {
              runAway = true
              run()
            }
    }
  }
  } 
      
      if(!enemies[0]) {
        // console.clear()
        console.log(`\n \x1b[1;34m YAY! There are no more aliens in the woods! The approaching ramblers can ramble in peace! \n the Doctor shouts some gibberish about wibbly wobbly timey wimey stuff while he runs back to the TARDIS without a word of thanks. \n You tut and mutter to yourself as you drag your stump leg through the woods... \n \x1b[0m`)
        console.log(`\n \x1b[1;34m END OF THE GAME \n Thank you for playing, ${player.name}! \x1b[0m `)
        player.hasWon = true
      }
}

function youDead() {
  console.log(` \n \x1b[1;31m 
          ARRGH, THAT BLOW ENDED YOU!
      Good job for failing the Doctor by dying. 
                  GAME OVER! \x1b[0m `)

  var finalRequest = ask.keyIn(`\n \x1b[1;32m Would you like to see your end game stats[y]? Or no[n]? \x1b[0m`, {limit: 'yn'})
  if(finalRequest === 'y') {
    var enemyList = enemies.map(enemy => {
      return ` ${enemy.name}`
    })

  console.log(`\n \x1b[1;31m You were ${player.name}, you had ${player.health} health points when you died, and these items: ${listInventory()}.
  You had these enemies left to defeat: ${!enemyList[0] ? `none, you killed them all!` : enemyList} \x1b[0m`)
  }

}
};

