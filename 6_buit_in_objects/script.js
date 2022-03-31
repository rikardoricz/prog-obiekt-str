console.log(window.innerHeight);
console.log(window.innerWidth);
let text = 'HehE;Heh ehe';
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0,3));
console.log(text.replace('ehe', 'dupa'));
let splitedText = text.split(';');
console.log(splitedText[0]);
let num = 123.15;
console.log(isNaN(text));
console.log(isNaN(num));
console.log(num.toFixed(1));
console.log(num.toPrecision(3));
let numString = num.toString();
console.log(numString.length);

let liczba1 = 216.7621;
console.log(int(liczba1));

console.log( (![] + [])[+[]] +
(![] + [])[+!+[]] +
([![]] + [][[]])[+!+[] + [+[]]] +
(![] + [])[!+[] + !+[]] );