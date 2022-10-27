/*
while yra isdarkytas for
for ir while - reikia, kad iskart atitiktu salyga, nes kitaip nesisuka
do-while pirma prasuka viena karta, o tik tuomet klausia ar kartoti (niekada nepraktiskas)
for-of kaip kaip paprastas Python for
foreach viduje funkcija yra tik vidine (nepasiekiama) - letas, naudojamas del perpanaudojamumo
map - atvaizduoti sena ir sukurti nauja masyva
sort - veikia ir skaiciai ir string, jei nieko nenurodai elgiasi kaip su string, tikrina nuo pirmo simbolio
*/
console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR
// [10, 2, 8, 4, 6]
let sumFor = 0;
for (let i = 0; i < marks.length; ++i) {
    sumFor += marks[i];
}
const aveFor = sumFor / marks.length;
console.log('For:', aveFor);

// WHILE
// [10, 2, 8, 4, 6]
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
const aveWhile = sumWhile / marks.length;
console.log('While:', aveWhile);

// DO-WHILE
// [10, 2, 8, 4, 6]
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length)
const aveDoWhile = sumDoWhile / marks.length;
console.log('Do-while:', aveDoWhile);

// FOR-OF
// [10, 2, 8, 4, 6]
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
const aveForOf = sumForOf / marks.length;
console.log('For-of:', aveForOf);

// FOREACH
// [10, 2, 8, 4, 6]
let sumForeach = 0;
marks.forEach(function (mark, index, list) {
    // console.log('--', mark, index, list);
    sumForeach += mark;
});
const aveForeach = sumForeach / marks.length;
console.log('Foreach:', aveForeach);

console.clear();

// Naujas masyvas su modifikuotomis reiksmemis, be MAP
const luckyNumbers = [3, 7, 13, 11, 31, 21, 666];
const alternativeLuckies = [];
for (const n of luckyNumbers) {
    alternativeLuckies.push(0xbabecaffe);
}
console.log(alternativeLuckies);

// MAP - padaryti masyvo kopija su modifikuota informacija
const priceBefore = [10, 2, 8, 4, 6];
const priceAfter = priceBefore.map(function (price) {
    const precision = 2;
    const deg = 10 ** precision;
    const PVM = 18.35;
    const coof = PVM / 100 + 1;
    // return +(price * coof).toFixed(precision);
    return Math.round(price * coof * deg) / deg;
});
console.log('Map:', priceBefore, priceAfter);

const priceAfter2 = priceBefore.map(function (price) {
    return price + 1;
})
console.log('Map:', priceBefore, priceAfter2);

const locationsMapBefore = ['Vilnius', 'kaunas', 'Klaipeda', 'Panevezis', 'Sieule'];
const locationsMapAfter = locationsMapBefore
    .map(function (location) {
        return location[0].toUpperCase() + '.';
    })
console.log('Map:', locationsMapBefore, locationsMapAfter);

console.clear();

const luckyPeople = [
    { name: 'Petras', age: 99 },
    { name: 'Maryte', age: 87 },
    { name: 'Jonas', age: 66 },
    { name: 'Ona', age: 35 },
];
const older70 = [];
for (const person of luckyPeople) {
    if (person.age > 70) {
        older70.push({
            age: person.age,
        });
    }
}
console.log(luckyPeople);
console.log(older70);

// FILTER - padaryti masyvo kopija su atfiltruotomis reiksmemis
const older70filter = luckyPeople
    .filter(function (person) {
        return person.age > 70;
    });
console.log(older70filter);

const older70filterAge = luckyPeople
    .filter(function (person) {
        return person.age > 70;
    })
    .map(function (person) {
        return {
            age: person.age
        }
    });
console.log(older70filterAge);

const filterBefore = [null, undefined, 1, false, {}, 'b', 2, 'd', true, [], 8, 'rytas'];

const filterNumbers = filterBefore.filter(function (item) {
    return typeof item === 'number';
});
console.log('Numbers only:', filterBefore, filterNumbers);

const filterStrings = filterBefore.filter(function (item) {
    return typeof item === 'string';
});
console.log('Strings only:', filterBefore, filterStrings);

const filterBool = filterBefore.filter(function (item) {
    return typeof item === 'boolean';
});
console.log('Bool only:', filterBefore, filterBool);

const filterOther = filterBefore.filter(function (item) {
    return typeof item !== 'number'
        && typeof item !== 'string'
        && typeof item !== 'boolean';
});
console.log('Others:', filterBefore, filterOther);

console.clear();

// SORT - modifikuoja masyva isrikiuojant jo duomenis

const keyboardNumber = [7, 8, 9, 4, 4, 10, 5, 11, 77, 114, 6, 1, 1, 2, 3, 0];
console.log(keyboardNumber);

keyboardNumber.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(keyboardNumber);

keyboardNumber.sort();
console.log(keyboardNumber);

console.clear();

// REDUCE - masyvo visas reiksmes suvesti i viena galutine reiksme

const marks2 = [10, 2, 8, 4, 6];
const sumReduce = marks2.reduce(function (total, n) {
    return total + n;
});
console.log('Reduce sum:', sumReduce);

const marks3 = [1, 2, 3, 4, 5];
const productReduce = marks3.reduce(function (total, n) {
    return total * n;
});
console.log('Reduce product:', productReduce);

const marks4 = [10, 2, 8, 4, 6];
const minusReduce = marks4.reduce(function (total, n) {
    return total - n;
});
console.log('Reduce minus:', minusReduce);

const marks2_50 = [10, 2, 8, 4, 6];
const sumReduce50 = marks2_50.reduce(function (total, n) {
    return total + n;
}, 50);
console.log('Reduce sum:', sumReduce50);

const marks3_0 = [1, 2, 3, 4, 5];
const productReduce0 = marks3_0.reduce(function (total, n) {
    return total * n;
}, 10);
console.log('Reduce product:', productReduce0);


// DEMO

const list = [0, 3, 2, 1, 6, 5, 4, 9, 8, 7];

const ats = list
    .map(function (n) {
        return n * 2 + 1;
    })
    .filter(function (n) {
        return n % 5 === 0 || n % 3 === 0;
    })
    .sort(function (a, b) {
        if (a > b) { return 1 }
        if (a === b) { return 0 }
        return -1;
    })
    .reduce(function (total, n) {
        return total + n;
    }, 0);

console.log(ats);