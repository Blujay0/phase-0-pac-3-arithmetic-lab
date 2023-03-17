function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    if (isNaN(n)) {
        return NaN;
    }
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    if (isNaN(n)) {
        return NaN;
    }
    return parseFloat(n);
}