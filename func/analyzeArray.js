function analyzeArray(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
        throw new Error('The array is empty');
    }
    let sum = arrayOfNumbers.reduce((a, b) => { return a + b })
    const average = sum / arrayOfNumbers.length;
    const max = arrayOfNumbers.sort((a, b) => { return b - a })[0];
    const min = arrayOfNumbers.sort((a, b) => { return a - b })[0];
    const length = arrayOfNumbers.length;
    return { average, min, max, length };
}

module.exports = analyzeArray;