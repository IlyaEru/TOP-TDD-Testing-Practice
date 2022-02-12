const caesarCipher = require('../func/caesarCipher');
test('should shift the characters', () => {
    const string = 'abc';
    const shiftAmount = 2;
    expect(caesarCipher(string, shiftAmount)).toBe('cde');
});

test('should shift the last characters ', () => {
    const string = 'xyz';
    const shiftAmount = 4;
    expect(caesarCipher(string, shiftAmount)).toBe('bcd');
});

test('should not change white spaces ', () => {
    const string = 'ab c';
    const shiftAmount = 2;
    expect(caesarCipher(string, shiftAmount)).toBe('cd e');
});

test('should not change Numbers', () => {
    const string = 'abc123';
    const shiftAmount = 2;
    expect(caesarCipher(string, shiftAmount)).toBe('cde123');
});

test('should work on long strings', () => {
    const string = 'defend the east wall of the castle';
    const shiftAmount = 10;
    expect(caesarCipher(string, shiftAmount)).toBe('nopoxn dro okcd gkvv yp dro mkcdvo');
});

test('should work on Upper case', () => {
    const string = 'ABC';
    const shiftAmount = 2;
    expect(caesarCipher(string, shiftAmount)).toBe('CDE');
});