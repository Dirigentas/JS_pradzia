/*
undefined - kai negali surasti norimo rodmens, pavyzdziui array
array - atvaizduoja ir kablelius ir kabutes (tai tiesiog spausdinimo info)
deti kalblelius ir po paskutines eilutes, optimizuojamas git  comit 
matrica - arejus kitame arejuje
*/
/*
ARRAY - sąrašas, masyvas, matrica (default 2D, 3D, 4D....)
*/
console.clear();

const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
const p5 = 6;
const p6 = 10;

const vidurkis = (p1 + p2 + p3 + p4 + p5 + p6) / 6;
console.log(`vidurkis: ${vidurkis}`);

const mokiniai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const turiPapeikima = [true, false, false, true];

//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const ap1 = pazymiai[0];
const ap2 = pazymiai[1];
const ap3 = pazymiai[2];
const ap4 = pazymiai[3];
const ap5 = pazymiai[4];

const kiekis = pazymiai.length;

const pazymiuVidurkis = (ap1 + ap2 + ap3 + ap4 + ap5) / kiekis;
console.log(`pazymiu vidurkis: ${pazymiuVidurkis}`);

const wikiPuslapiai = [45];
const wikiPuslapiuKiekis = wikiPuslapiai.length;
console.log(wikiPuslapiuKiekis);

const wikiText = `Wiki puslapiu: ${wikiPuslapiuKiekis} kiekis.`;
console.log(wikiText);

const pirkiniai = [
    ['agurkas', 3],
    ['pomidoras', 20],
    ['burokelis', 2],
    ['kefyras', 2],
    ['druska', 1],
    ['bliudas', 1],
    ['saukstas', 15],
    ['bulves', 30],
    ['kiausiniai', 10],
    ['grietine', 1],
];
const prekesIndex = 3;
const preke = pirkiniai[prekesIndex];
const prekesKiekis = preke[1];
const prekesPavadinimas = preke[0];
const prekesAprasas = `Reikia nupirkti ${prekesKiekis} ${prekesPavadinimas}.`;

console.log(prekesAprasas);

// mokykla > klases > mokiniai > tevus > telefonai
const mokykla = [
    [1, [
        ['Petras', [
            ['Petro tete', [
                112,
            ]],
            ['Petro mama', [
                911,
            ]],
        ]],
        ['Maryte', [
            ['Marytes tete', [
                123456,
                123457,
                123458,
            ]],
            ['Marytes mama', [
                654321,
                654320,
            ]],
        ]],
    ]],
    [2, [
        ['Jonas', [
            ['Jono tete', []],
            ['Jono mama', []],
        ]],
        ['Ona', [
            ['Onos tete', [
                99999,
            ]],
            ['Onos mama', []],
        ]],
    ]],
];

// Jono mamos tel kiekis
const klase = 1;
const mokinioIndex = 1;
const tevuIndex = 0;

const telefonai = mokykla[klase - 1][1][mokinioIndex][1][tevuIndex][1].length;
console.log(telefonai);

console.log('---------------------------');

const telefonai1 = mokykla[0][1][1][1][0][1].length
console.log(`Same answer as before: ${telefonai1}`);

console.log(`Same again: ${mokykla[0][1][1][1][0][1].length}`);

console.log('Same again: ' + mokykla[0][1][1][1][0][1].length);