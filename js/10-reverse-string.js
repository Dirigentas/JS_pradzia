/*
i = i + 1
i += 1
i -= 1
i++  prideda po darbo su reiksme i
++i  prideda pries dirbant su reiksme i
i--
--i
jei 'for' parametrai yra iskeliami, butina palikti kabletaskius
vaikines funkcijos mato tevines funkcijas, o tevines funkcijos negali pasiekti savo vaikiniu funkciju

*/

console.clear();

function reverseString(str) {
    let ats = '';

    // 1) paimti simbolius is galo ir sudeti is eiles
    // for (let i = str.length - 1; i >= 0; --i) {
    //     const symbol = str[i];
    //     ats += symbol;
    // }

    // 2) einam is priekio ir simboli indeksas atbulai skaiciuojamas
    // for (let i = 0; i < str.length; ++i) {
    //     const index = str.length - 1 - i;
    //     const symbol = str[index];
    //     ats += symbol;
    // }

    // 3) einam is priekio ir simboli statom pries konstruojama teksta
    for (let i = 0; i < str.length; ++i) {
        const symbol = str[i];
        ats = symbol + ats;
    }

    // 4) nenaudojamas trecias for parametras; atskira eilute
    // for (let i = 0; i < str.length;) {
    //     const symbol = str[i];
    //     ats = symbol + ats;
    //     ++i;
    // }

    // 5) nenaudojamas trecias for parametras; be atskiros eilutes
    // for (let i = 0; i < str.length;) {
    //     const symbol = str[i++];
    //     ats = symbol + ats;
    // }

    // 6) pirmas for parametras iskeltas pries cikla
    // let i = 0;
    // for (; i < str.length;) {
    //     const symbol = str[i++];
    //     ats = symbol + ats;
    // }

    // 7) antras parametras kaip atskira funkcija
    // function arTestiCikla(index, text) {
    //     if (index < text.length) {
    //         return true;
    //     }
    //     return false;
    // }

    // let i = 0;
    // for (; arTestiCikla(i, str);) {
    //     const symbol = str[i++];
    //     ats = symbol + ats;
    // }

    // 8) antras parametras kaip atskira funkcija su ternary viduje
    // function arTestiCikla(index, text) {
    //     return index < text.length ? true : false;
    // }

    // let i = 0;
    // for (; arTestiCikla(i, str);) {
    //     const symbol = str[i++];
    //     ats = symbol + ats;
    // }

    // 9) antras parametras kaip atskira funkcija be didesnes logikos
    // function arTestiCikla(index, text) {
    //     return index < text.length;
    // }

    // let i = 0;
    // for (; arTestiCikla(i, str);) {
    //     const symbol = str[i++];
    //     ats = symbol + ats;
    // }

    return ats;
}

console.log(reverseString([1, 2, 3, 4]), '->', 'fedcba');
console.log(reverseString('sula'), '->', 'alus');
console.log(reverseString('seked uzu kedes'), '->', 'seked uzu kedes');
console.log(reverseString('aras'), '->', 'sara');