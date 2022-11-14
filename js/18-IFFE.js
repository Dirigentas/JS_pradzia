function labas() {
    console.log('labas');
}

labas();

(function () {
    console.log('iki');
})();

(() => console.log('super'))();

((a, b) => {
    console.log(a + b);
})(7, 5)