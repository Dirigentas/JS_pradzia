console.clear();

/*
TERNARY - supaprastintas if'as
Sablonas: klausimas ? teigiama : neigiama;
Analogas if'e:
if (klausimas) {
    teigiama
} else {
    neigiama
}
*/

const amzius = 166;
const amziausCenzas = 21;

let ats = '';

if (amzius >= amziausCenzas) {
    ats = 'galiu daryt ka noriu';
} else {
    ats = 'laukiam...';
}
console.log(ats);

const ats2 = amzius >= amziausCenzas ? 'galiu daryt ka noriu' : 'laukiam...';

console.log(ats2);


let taiKaipIf = '';
if (4 > 22 && 5 >> 77) {
    taiKaipIf = 'daugiau';
} else {
    taiKaipIf = 'maziau';
}
console.log(taiKaipIf);


const taiKaip = 4 > 22 && 5 > 77 ? 'daugiau' : 'maziau';
console.log(taiKaip);

const age = 20;
const zinute = age >= 21 ? 'pilnametis' : 'nepilnametis';
console.log(zinute);

const zinute2 = `${age >= 21 ? '' : 'ne'}pilnametis`;
console.log(zinute2);


console.log('----------------');

const a = 1 > 2
    ? 3
    : 4;
console.log(a);

const b = 1 > 2 ? 3 > 4 ? 5 : 6 : 7 > 8 ? 9 : 0;
console.log(b);