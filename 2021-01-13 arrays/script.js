// 1
 
var names = [
    'Adam', 'Michal', 'Blazej'
];
names.push('Dawid', 'Tomek');
names.pop();
console.log(names);
 
// 2
// a
var tab1 = [
    7,3,1,6,9,5,4,10,2,2
];
console.log(tab1[4]);
tab1[6] = 12;
console.log(tab1);
 
// b
var tab2 = new Array(tab1.length);
for (let i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
}
console.log(tab2);
 
// c
var tab3 = new Array(tab2.length);
 
for (let i = 0; i < tab3.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
}
console.log(tab3);
 
// 3
// a
var arr = [];
 
for (let i = 0; i < 5; i++) {
    arr[i] = parseInt(prompt("Podaj liczbę:"));
}
console.log(arr);
 
// b & e
arr.sort(function(a,b) {
    return a - b;
})
console.log(arr);
 
var min = arr[0];
var max = arr[arr.length - 1];
console.log("min:"+min);
console.log("max:"+max);
 
// c
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
var avg = sum / (arr.length);
console.log("sum:"+sum);
console.log("avg:"+avg);
 
// d
var counterEqual3 = 0;
for (const tab of arr) {
    tab == 3 ? counterEqual3++ : '';
}
console.log("num 3 quantity:"+counterEqual3);

// f
for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
}
console.log("square:"+arr);

// g
var counterEven = 0;
var counterOdd = 0;
for (const element of arr) {
    element % 2 == 0 ? counterEven++ : counterOdd++;
}
console.log("even nums quantity:"+counterEven);
console.log("odd nums quantity:"+counterOdd);

// 4
var hundred = new Array(100);
for (let i = 0; i < hundred.length; i++) {
    hundred[i] = Math.pow(2,i);
}
console.log(hundred);