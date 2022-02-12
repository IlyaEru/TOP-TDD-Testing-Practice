
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}
function divide(firstNum, secondNum) {
    if (secondNum === 0) {
        throw new Error("can't divide by 0")
    }
    return firstNum / secondNum;
}
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}


module.exports = {
    add,
    subtract,
    divide,
    multiply,
}