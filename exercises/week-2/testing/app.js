module.exports = {

  sum: (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'You must provide 2 numbers!'
    } else {
      return Number(num1) + Number(num2)
    }
  },

  reverse: (arr) => {
    return arr.reverse()
  }

}