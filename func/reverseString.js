function reverseString(string) {
    if (string == '') {
        throw Error('String is Empty');
    }
    if (typeof (string) !== 'string') {
        throw Error('This is not astring');
    }
    return string.split('').reverse().join('');
}
module.exports = reverseString;