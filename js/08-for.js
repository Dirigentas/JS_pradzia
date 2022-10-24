console.clear()
/*
FOR - ciklas (tėvinis, visų ciklų tėvas, daro daugiausiai iš visų ciklų)
rasti šabloną ir jį įdėti į FOR
for (nuo kurio indekso pradėti   kiek laiko kartoti   koks žingsnis) {}
užsivadinant variables - reikia labai aiškiai, duoti jiems reikšmes to duomenų tipo, kuris ir bus. '' string, [] array ir pan.

ND. Rimanto uždaviniai, pasizaisti su praskipintom reiksmem
*/
console.clear();

const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

let userIndex = 0;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

const money = [10, 50, 20, 13];

let wallet = 0;
let moneyIndex = 0;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

console.log('Wallet:', wallet);

const marks = [10, 2, 8, 4];
let total = 0;

for (let i = 0; i < marks.length; i = i + 1) {
    console.log(i, '->', marks[i]);
    total = total + marks[i];
}

const count = marks.length;
const average = total / count;

console.log('Average:', average);

for (let i = marks.length - 1; i >= 0; i = i - 1) {
    console.log(i, '->', marks[i]);
}


const a = -5;
const b = 3;

for (let i = a; i <= b; i = i + 1) {
    console.log(i);
}

console.log('### Skaiciu suma intervale');



function sumaIntervale(start, end) {
    let suma = 0;

    for (let i = start; i <= end; i = i + 1) {
        suma = suma + i;
    }
    console.log(`${start}..${end} = ${suma}`);

    return suma;
}

sumaIntervale(0, 0);
sumaIntervale(0, 4);
sumaIntervale(0, 100);
sumaIntervale(574, 815);
sumaIntervale(-50, 50);
sumaIntervale(-70, 30);
sumaIntervale(5, 5);
sumaIntervale(-5, -5);

console.log('--------------');

const list = [
    {},
    { end: 4 },
    { end: 100 },
    { start: 574, end: 815 },
    { start: -50, end: 50 },
    { start: -50 },
    { start: -70, end: 30 },
];

let obj = null;
for (let i = 0; i < list.length; i = i + 1) {
    obj = list[i];
    let pradzia = obj.start;
    let pabaiga = obj.end;
    if (!pradzia) {
        pradzia = 0;
    }
    if (!pabaiga) {
        pabaiga = 0;
    }
    sumaIntervale(pradzia, pabaiga);
}
console.log(obj);

console.log('--------------');

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);

for (let i = 0; i < abc.length; i = i + 1) {
    const symbol = abc[i];
    console.log(symbol);
}

const username = 'sula';
console.log(username);

for (let i = 0; i < username.length; i = i + 1) {
    const symbol = username[i];
    console.log(symbol);
}