console.log({a: 1, b: 2});

const str = "my ass, my A$$SSSss, MY A$$$$SSSSSSSSS!!!!!";
const regexp = /[^a-z]/gi;
console.log(str.replace(regexp, ""));

const str2 = "abc's test#s";
console.log(str2.replace(/[^a-zA-Z ]/g, ""));

const specialCharRegExp = /[^a-z0-9 ]/gi;
const whiteSpaceRegExp = /\s/g;
const pokemonNameRegexp = /[a-z]*\d?\s?[a-z]*\d?/i

console.log("meera Bénji $$$%bbhbbhbhbb".replace(specialCharRegExp, "").replace(whiteSpaceRegExp, "-"));