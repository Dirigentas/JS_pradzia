// https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit
console.clear()

//Kintamųjų inicijavimas 1
let number1 = 20
console.log(number1);
let number2 = 20
console.log(number2);
const number3 = number1 + number2
console.log(number3);
console.log('=====================');

/*Kintamųjų inicijavimas 2 */
const string1 = 'labas'
console.log(string1);
const string2 = "vakaras"
console.log(string2);
const string3 = `mielieji`
console.log(string3);
console.log('=====================');

// Kintamųjų inicijavimas 3
const a = [1, 2, 3, -4, 5]
console.log(a);
const b = [6, 7, 8, 9, 10.1]
console.log(b);
const c = [NaN, Infinity, 11,5, -12, 0]
console.log(c);
console.log('=====================');
// Kintamųjų inicijavimas 4
const d = ['labas', 'laba', 'lab', 'la', 'a']
console.log(d);
const e = ['6', '7', '8', '9', '10.5']
console.log(e);
const f = ['NaN', 'Infinity', '11,5', '-12', '0']
console.log(f);
console.log('=====================');

//Veiksmai su kintamaisiais 1
console.log(number1 + number2 + number3);
console.log('=====================');

//Veiksmai su kintamaisiais 2
console.log(string1 + ' ' + string2 + ' ' + string3);
console.log('=====================');

//Veiksmai su kintamaisiais 3
console.log(a[0] - a[1] + a[2] - a[3] + a[4]);
console.log(b[0] - b[1] + b[2] - b[3] + b[4]);
console.log(c[0] - c[1] + c[2] - c[3] + c[4]);
console.log('=====================');

//Veiksmai su kintamaisiais 4
console.log(`${d[0]}, ${d[1]}, ${d[2]}, ${d[3]}, ${d[4]}`);
console.log(`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}`);
console.log(`${f[0]}, ${f[1]}, ${f[2]}, ${f[3]}, ${f[4]}`);
console.log('=====================');

console.log('Kintamųjų palyginimas 1 ==========')
console.log(number1 > number2);
console.log(number3 > number2);
console.log(number1 == number2);

console.log('Kintamųjų palyginimas 2 ==========')
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);


console.log('Ciklo for panaudojimas 1 ==========')
function sumaIntervale (a, b) {
    suma = 0
    for (i = a; i <= b; i = i + 1) {
        suma = i + suma
    }
    return suma
}
console.log(sumaIntervale(0, 0));
console.log(sumaIntervale(0, 4));
console.log(sumaIntervale(0, 100));
console.log(sumaIntervale(574, 815));
console.log(sumaIntervale(-50, 50));
console.log(sumaIntervale(-70, 30));


console.log('Ciklo for panaudojimas 2 ==========')

let reverse = ''
for (i = string1.length-1; i >=0; i = i - 1) {
    reverse = reverse + string1[i]
}
console.log(`${string1} => ${reverse}`); 

let reverse2 = ''
for (i = string2.length-1; i >=0; i = i - 1) {
    reverse2 = reverse2 + string2[i]
}
console.log(`${string2} => ${reverse2}`); 

let reverse3 = ''
for (i = string3.length-1; i >=0; i = i - 1) {
    reverse3 = reverse3 + string3[i]
}
console.log(`${string3} => ${reverse3}`); 

console.log('Ciklo for panaudojimas 3 ==========')

0 - 11
8 - 31
-18 - 18
console.clear()

console.log('TEST=====================');

 function quarter(a) {
    return Math.round((a + 1) / 3)
 }

console.log(quarter(1), '=> 1');
console.log(quarter(2), '=> 1');
console.log(quarter(3), '=> 1');
console.log(quarter(4), '=> 2');
console.log(quarter(5), '=> 2');
console.log(quarter(6), '=> 2');
console.log(quarter(7), '=> 3');
console.log(quarter(8), '=> 3');
console.log(quarter(9), '=> 3');
console.log(quarter(10), '=> 4');
console.log(quarter(11), '=> 4');
console.log(quarter(12), '=> 4');

console.clear()

// 👇️ ['1', '2', '3', '4']
console.log(Array.from(String(1234)));

const number = 1234;

const arrOfDigits = Array.from(String(number), Number);
console.log(arrOfDigits); // 👉️ [1, 2, 3, 4]

// Supported in IE

const arr = String(number).split('').map(str => Number(str));

console.log(arr); // 👉️ [1, 2, 3, 4]

console.log('aras'.slice(0, -2))

console.log('8 j 8   mBliB8g  imjB8B8  jl  B'.replaceAll(' ', ''))

