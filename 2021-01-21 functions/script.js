// 1
function WARTOSC_BEZWZGLEDNA(abs) {
    abs > 0 ? console.log(abs) : 
    abs == 0 ? console.log(0) : 
    abs < 0 ? console.log(-abs) : '';
}

WARTOSC_BEZWZGLEDNA(5);
WARTOSC_BEZWZGLEDNA(0);
WARTOSC_BEZWZGLEDNA(-8);

// 2
function CZY_PARZYSTA (value) {
    if (value % 2 == 0) {
        return true;
    } else return false;
}

console.log(CZY_PARZYSTA(8));
console.log(CZY_PARZYSTA(87));
console.log(CZY_PARZYSTA(-44));

// 3

const PODZIELNOSC = () => {
    const a = parseInt(prompt("Podaj ilocyfrowe liczby cie interesuja:"));
    const b = parseInt(prompt("Podaj przez co maja byc podzielne:"));
    const low = Math.pow(10,a-1);
    const high = Math.pow(10,a);
    for (let i = low; i < high; i++) {
        if (i % b == 0) {
            console.log(i);
        }
    }
}
PODZIELNOSC();

// 4
function czy_naturalna(n) {
	if (typeof n !== 'number') 
	    return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
}


const LICZBA_PIERWSZA = num => {
    if (czy_naturalna(num)) {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return 0;
        return 1;
    }
}

console.log("Podana liczba " + (LICZBA_PIERWSZA(5) ? "" : "nie ") + "jest liczbą pierwszą");
console.log("Podana liczba " + (LICZBA_PIERWSZA(71) ? "" : "nie ") + "jest liczbą pierwszą");
console.log("Podana liczba " + (LICZBA_PIERWSZA(22) ? "" : "nie ") + "jest liczbą pierwszą");
console.log("Podana liczba " + (LICZBA_PIERWSZA(-8) ? "" : "nie ") + "jest liczbą pierwszą");

// 5

const LICZBA_CYFR = number => {
    if (czy_naturalna(number)) {
        return number.toString().length;
    }
}

console.log(LICZBA_CYFR(233));
console.log(LICZBA_CYFR(25555));
console.log(LICZBA_CYFR(-5));


