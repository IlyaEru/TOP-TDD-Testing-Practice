const capitalize = require('../func/capitalize');

it('should capitalize the string', () => {
    const string = 'river flows in you';
    expect(capitalize(string)).toBe('River flows in you');
})
it('should throw an error if string is empty', () => {
    const string = '';
    expect(() => capitalize(string)).toThrow();
})
it('should not change already capitalized string', () => {
    const string = 'River flows in you';
    expect(capitalize(string)).toBe('River flows in you');
})