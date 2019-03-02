class Player {
  constructor() {
    this.name = '',
    this.totalCoins = 0,
    this.status = '',
    this.hasStar = false,
    this.gameActive = true
  }
  setName(namePicked) {
    return this.name = namePicked
  }
  gotHit() {
    if(this.status === 'Dead') {
      console.log('wat')
    }
  }
  gotPowerUp() {

  }
  addCoin() {
    this.totalCoins += 1
  }
  print() {
    console.log(`
    Name: ${this.name}
    Total Coins: ${this.totalCoins}
    Status: ${this.status}
    Star: ${this.hasStar} `)
  }
}

const player1 = new Player()
player1.setName('Mario')

    randomNum = () => {
      let num = Math.floor(Math.random() * 3)
      if(num === 0) {
        return player1.gotHit()
      } else if(num === 1) {
        return player1.gotPowerUp()
      } else if(num === 2) {
        return player1.addCoin()
      }
    }
    
    let playFunction = setInterval(randomNum, 1000)

    stopGame = () => {
      if(!player1.gameActive) {
        clearInterval(playFunction)
      }
      else {
        randomNum()
      }
    }
    

console.log(randomNum())
console.log(player1.print())
stopGame()