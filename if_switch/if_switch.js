// zad 1
document.getElementById("zad1").onclick = function () {
  const a = +prompt("Podaj a:");
  const b = +prompt("Podaj b:");
  let c = a + b;

  document.getElementById("place1").innerHTML =
    "Suma liczb a: " + a + " i b: " + b + " wynosi: " + c;
  // console.log("Suma liczb a: " + a + " i b:" + b + " wynosi: " + c);
};

// zad 2
document.getElementById("zad2").onclick = function () {
  const a = +prompt("Podaj a:");
  const b = +prompt("Podaj b:");
  a > b ? console.log(a) : console.log(b);
};

// zad 3
document.getElementById("zad3").onclick = function () {
  const czyParzysta = +prompt("Podaj liczbę, aby sprawdzic czy jest parzysta:");
  czyParzysta % 2 === 0 ? console.log("parzysta") : console.log("nieparzysta");
};

// zad 4
document.getElementById("zad4").onclick = function () {
  const first = +prompt("Podaj pierwszą liczbę:");
  const second = +prompt("Podaj drugą liczbę:");
  first !== 0
    ? console.log(second % first === 0 ? "podzielna" : "niepodzielna")
    : console.log("Nie dziel przez zero!");
};

// zad 5
document.getElementById("zad5").onclick = function () {
  const a = +prompt("Podaj 1 bok:");
  const b = +prompt("Podaj 2 bok:");
  const c = +prompt("Podaj 3 bok:");
  const odcinki = [a, b, c];
  const [a1, a2, a3] = odcinki.sort();
  let perimeter = a1 + a2 + a3;
  a1 + a2 > a3
    ? console.log("Da sie zbudowac trójkąt, jego obdów wynosi:" + perimeter)
    : console.log("Nie da się zbudować trójkąta");
};

// zad 6
document.getElementById("zad6").onclick = function () {
  let fiveNums = new Array(5);
  for (let i = 0; i < fiveNums.length; i++) {
    fiveNums[i] = +prompt("Podaj liczbę:");
  }
  fiveNums = fiveNums.sort();
  const total = fiveNums.reduce((a, b) => {
    return a + b;
  });
  console.log(`
    Najmniejsza wartość: ${fiveNums[0]}
    Największa wartość: ${fiveNums[fiveNums.length - 1]}
    Średnia: ${total / fiveNums.length}
    `);
};

// zad 7
document.getElementById("zad7").onclick = function () {
  const value = +prompt("Podaj liczbę, aby obliczyc jej wartość bezwzględną:");
  console.log(value < 0 ? -value : value);
};

// zad 8
document.getElementById("zad8").onclick = function () {
  const a = +prompt("Podaj poczatek przedziału[a,b]:");
  const b = +prompt("Podaj koniec przedziału[a,b]:");
  const c = +prompt("Podaj liczbe c, aby sprawdzić czy należy do przedziału:");
  if (a < b) {
    if (c > a && c < b) {
      console.log("c należy do przedziału[a,b]");
    } else console.log("c nie należy do przedziału [a,b]");
  } else {
    if (c > b && c < a) {
      console.log("c należy do przedziału[a,b]");
    } else console.log("c należy do przedziału[a,b]");
  }
};

// zad 9
document.getElementById("zad9").onclick = function () {
  const booksAmount = +prompt("Podaj ilość książek do wydrukowania:");
  n = booksAmount;
  if (n > 1000) {
    console.log(n * 10 + " zł");
  } else if (n <= 1000 && n >= 500) {
    console.log(n * 12 + " zł");
  } else if (n < 500 && n > 0) {
    console.log(n * 15 + " zł");
  } else console.log("Błąd! Podano nieprawidłowy nakład książek.");
};

// zad 10
document.getElementById("zad10").onclick = function () {
  const dayVal = +prompt("Podaj cyfre, żeby sprawdzić jaki to dzień tygodnia:");
  switch (dayVal) {
    case 1:
      {
        console.log("Poniedziałek");
      }
      break;
    case 2:
      {
        console.log("Wtorek");
      }
      break;
    case 3:
      {
        console.log("Środa");
      }
      break;
    case 4:
      {
        console.log("Czwartek");
      }
      break;
    case 5:
      {
        console.log("Piątek");
      }
      break;
    case 6:
      {
        console.log("Sobota");
      }
      break;
    case 7:
      {
        console.log("Niedziela");
      }
      break;
    default: {
      console.log("Podana wartość nie odpowiada żednemu dniu tygodnia!");
    }
  }
};
