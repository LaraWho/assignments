const { sum, reverse } = require("./app");

describe('test sum function', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('should receive two numbers as arguments', () => {
    expect(sum('num1', true)).toBe('You must provide 2 numbers!')
  })
  it('should return a number', () => {
    expect(sum(1, 2)).toBe('number')
    expect(sum(5, 40)).toBe('number')
  })
});

describe('function to reverse an array', () => {
  test('reverse an array', () => {
    expect(reverse([1,2,3])).toEqual([3,2,1])
  })
});

