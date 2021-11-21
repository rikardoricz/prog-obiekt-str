// zad 1
document.getElementById("zad1").onclick = function () {
  const a = parseInt(prompt("Podaj liczbe, aby obliczyc silnie:"));

  if (a < 0) {
    document.getElementById("place1").innerHTML =
      "Błąd! Nie ma silni z liczby < 0";
  } else if (a == 0) {
    document.getElementById("place1").innerHTML = "0! = 1";
  } else {
    let strong = 1;
    for (let i = a; i > 1; i--) {
      strong *= i;
    }
    document.getElementById("place1").innerHTML = a + "! = " + strong;
  }
};

// zad 2

document.getElementById("zad2").onclick = function myFunc() {
  for (let i = 10; i < 100; i++) {
    if (i % 4 == 0) {
      document.getElementById("place2").innerHTML += i + " ";
    }
  }
};

// zad 3
document.getElementById("zad3").onclick = function () {
  const step = parseInt(prompt("Podaj krok:"));
  document.getElementById("place3").innerHTML = "Krok = " + step + "- > ";
  let i = 0;
  while (i < 200) {
    i += step;
    if (i <= 200) document.getElementById("place3").innerHTML += i+" ";
  }
};

// zad 4
document.getElementById("zad4").onclick = function () {
  let fiveNums = new Array(5);
  for (let i = 0; i < fiveNums.length; i++) {
    fiveNums[i] = parseInt(prompt("Podaj liczbę:"));
  }
  const total = fiveNums.reduce((a, b) => {
    return a + b;
  });
  document.getElementById("place4").innerHTML = "Suma: " + total + "</br>Elementy tablicy: "+ fiveNums.join();
};

// zad 5
document.getElementById("zad5").onclick = function () {
  let foo = new Array;

  for (let i = 0; i >= 0; i++) {
    foo[i] = parseInt(prompt("Podaj liczbe:"));
    if (foo[i] == 0) {
      break;
    }

  }
  const sortedFoo = foo.sort((a, b) => a-b);
  document.getElementById("place5").innerHTML = `
  MAX: ${foo[foo.length - 1]}
  MIN: ${foo[0]}
  SORT: ${sortedFoo}
  `;
  console.log(`
  MAX: ${foo[foo.length - 1]}
  MIN: ${foo[0]}
  SORT: ${sortedFoo}
  `);

};

// zad 6
document.getElementById("zad6").onclick = function () {
  let sum = 0;
  let i = 0;
  let num = 0;
  while (sum < 50) {
    num = parseInt(prompt("Podaj liczby:"));
    sum += num;
    i++;
  }
  if (sum > 50) {
    sum -= num;
    i--;
  }
  document.getElementById("place6").innerHTML =
    "Suma liczb: " + sum + " \n zsumowano " + i + " liczb";
};

// zad 7
document.getElementById("zad7").onclick = function () {
  let money = 2;
  let days = 1;
  do {
    money *= 2;
    days++;
  } while (days < 30);

  let formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
  fMoney = formatter.format(money);
  document.getElementById("place7").innerHTML = "Syn zaoszczędził " + fMoney;
};

// zad 8
document.getElementById("zad8").onclick = function () {
  let base = 10;
  let allBricks = 0;
  let singleFloor = 0;
  for (let i = base; i > 0; i--) {
    singleFloor = Math.pow(i, 2);
    allBricks += singleFloor;
  }
  document.getElementById("place8").innerHTML =
    "Ilość cegieł w piramidzie: " + allBricks;
};