console.clear()

const start = 0;
const end = 10_000_000_000_000_000_000_000_000_000_000_000;
const end2 = 10

let sum = 0;

// for (let i = start; i <= end; ++i) {
//     sum += i;
// }

const n = end - start;
sum = (1 + n) * n / 2;

const n1 = end2 - start;
sum = (1 + n1) * n / 2;

console.log(`${start}..${end}=${sum}`);
console.log(`${start}..${end2}=${sum}`);