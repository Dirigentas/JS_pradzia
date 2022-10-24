console.clear();

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti normalus skaicius.';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti normalus skaicius.';
    }
    const c = a * b;
    return c;
}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(6, 8), '->', 48);
console.log(multiply(-2, -5), '->', 10);
console.log(multiply(-2, 5), '->', -10);
console.log(multiply(2, -5), '->', -10);
console.log(multiply(2, 0), '->', 0);
console.log(multiply(0, 2), '->', 0);
console.log(multiply(0, 0), '->', 0);
console.log(multiply(3.14, 2), '->', 6.28);
console.log(multiply(2, 3.14), '->', 6.28);
console.log(multiply(3.5, 2.5), '->', 8.75);
console.log(multiply(Infinity, 2.5), '->', Infinity);
console.log(multiply(NaN, 2.5), '->', NaN);
console.log(multiply(5, '7'), '->', 'ERROR');
console.log(multiply(5, 'labas'), '->', 'ERROR');
console.log(multiply('7', 5), '->', 'ERROR');
console.log(multiply('labas', 5), '->', 'ERROR');