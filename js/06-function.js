/*
function - kaip def in Python
geriau rasyti ne komentaraus paaiskinancius koda, o kurti kintamuosius, kurie paaiskina kas yra skaiciuojama
() {}  - funkcija
= {}   -  object
= []   -  array
*/
console.clear();
/*
FUNCTION - funkcija
proceduru rinkinys, kuri galime iskviesti ir perpanaudoti N kartu, pagal poreiki ir/arba su skirtingais parametrais
*/
/*
ARBATOS RUOSIMAS:
- atsukti ciaupa/krana: saltas/karstas/abu
- i virduli ipilti vandens
- uzkaisti vandeni
- paimti puodeli
- isplauti puodeli
- ideti arbatos/arbatzoliu (rusis)
- ideti saldiklio/cukraus:
    - rusis: saldiklio/cukraus/nieko
    - kiekis gali buti skirtingas: 0..N
- uzpilti vandeni: kiekis (mazas/didelis)
- ismaisyti: nemaisyti/maisyti
- puodelio uzdengimas: uzdengti/palikti ramybeje
Petras - pagamink man arbatos, prasau - zoleles, 0 cukraus, didelis!
Maryte - pagamink man arbatos, prasau - raudonos, 2 saldikliai, mazas!
Jonas - pagamink man arbatos, prasau!
Ona - pagamink man arbatos, prasau!
*/

function sum(a, b) {
    console.log('Pirmas kintamasis:', a);
    console.log('Antras kintamasis:', b);
    return a + b;
}

const n1 = 7;
const n2 = 5;
const n3 = 3;
const n4 = 1;

const s12 = sum(n1, n2);
console.log(`${n1} + ${n2} = ${s12}`);

const s34 = sum(n3, n4);
console.log(`${n3} + ${n4} = ${s34}`);

const s31 = sum(n3, n1);
console.log(`${n3} + ${n1} = ${s31}`);


function kainaSuPVM(kaina) {
    const PVM = 20;
    const koeficientas = PVM / 100 + 1;
    const galutineKaina = kaina * koeficientas;
    return galutineKaina;
}

const kainaBePVM1 = 5;
const kainaBePVM2 = 10;
const kainaBePVM3 = 100;

const kaina1 = kainaSuPVM(kainaBePVM1);
const kaina2 = kainaSuPVM(kainaBePVM2);
const kaina3 = kainaSuPVM(kainaBePVM3);

console.log(kaina1);
console.log(kaina2);
console.log(kaina3);

console.log(kainaSuPVM(0));
console.log(kainaSuPVM(1));
console.log(kainaSuPVM(2));
console.log(kainaSuPVM(3));
console.log(kainaSuPVM(4));


// Petras, 2 -> Sveiki, as esu Petras ir man 2 metai.
// Maryte, 12 -> Sveiki, as esu Maryte ir man 12 metai.

function prisistatymas(vardas, amzius) {
    return `Sveiki, as esu ${vardas} ir man ${amzius} metai.`;
}

const asmuo1 = prisistatymas('Petras', 2);
const asmuo2 = prisistatymas('Maryte', 12);

console.log(asmuo1);
console.log(asmuo2);



