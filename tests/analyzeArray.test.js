const analyzeArray = require('../func/analyzeArray');

test('should work with an array of number', () => {
    const arrayOfNumbers = [1, 8, 3, 4, 2, 6];
    expect(analyzeArray(arrayOfNumbers)).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('should work with float numbers', () => {
    const arrayOfNumbers = [1, 8.6, 3, 4, 2, 6];
    expect(analyzeArray(arrayOfNumbers).average).toBeCloseTo(4.1);
});

test('should work with one number', () => {
    const arrayOfNumbers = [1];
    expect(analyzeArray(arrayOfNumbers)).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});

it('should throw an error if array is empty', () => {
    const arrayOfNumbers = [];
    expect(() => analyzeArray(arrayOfNumbers)).toThrow('The array is empty');
});