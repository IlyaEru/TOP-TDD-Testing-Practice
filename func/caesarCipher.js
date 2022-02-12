function caesarCipher(string, shiftAmount) {
    const newStringNumbers = [];
    for (let i = 0; i < string.length; i++) {
        let shifthedCharCode = string.charCodeAt(i) + shiftAmount;
        if (shifthedCharCode - shiftAmount < 65 ||
            (shifthedCharCode - shiftAmount > 90 && shifthedCharCode - shiftAmount < 97) ||
            shifthedCharCode - shiftAmount > 122) {
            newStringNumbers.push(shifthedCharCode - shiftAmount);
            continue;
        }
        if (shifthedCharCode > 122) {
            shifthedCharCode = shifthedCharCode - 26;
        }


        newStringNumbers.push(shifthedCharCode);
    }
    return String.fromCharCode(...newStringNumbers);
}

module.exports = caesarCipher;