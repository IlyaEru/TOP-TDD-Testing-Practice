const reverseString = require('../func/reverseString');

it('should return the string reversed', () => {
    const string = 'Test';
    expect(reverseString(string)).toBe('tseT');
});

it('should throw an error if string is empty', () => {
    const string = '';
    expect(() => reverseString(string)).toThrow('String is Empty');
})

it('should throw an error if the argument is not a string', () => {
    const arg = 43124;
    expect(() => reverseString(arg)).toThrow('This is not astring');
})