const calculator = require('../func/calculator');

it('should return correct addition', () => {
    expect(calculator.add(40, 2)).toBe(42);
});

it('should return correct subtraction', () => {
    expect(calculator.subtract(40, 2)).toBe(38);
});

it('should return correct division', () => {
    expect(calculator.divide(40, 2)).toBe(20);
});

it('should return correct multiplication', () => {
    expect(calculator.multiply(40, 2)).toBe(80);
});

it('should throw an error if dividing by 0', () => {
    expect(() => calculator.divide(40, 0)).toThrow("can't divide by 0");
})
