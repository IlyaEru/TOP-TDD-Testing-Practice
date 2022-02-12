function capitalize(string) {
    if (string == '') {
        throw Error('String is Empty');
    }
    string = string.split('');
    const upper = string[0].toUpperCase();
    string.splice(0, 1);
    return upper + string.join('');
}
module.exports = capitalize;