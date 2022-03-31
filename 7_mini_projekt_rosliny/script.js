
function getEl1() {
    console.log(document.getElementById("header"));
};
function getEl2() {
    console.log(document.querySelector("div"));
};
function getEl3() {
    console.log(document.getElementsByClassName("paragraph"))
};
function getEl4() {
    console.log(document.getElementsByTagName("input"))
};
function getEl5() {
    console.log(document.querySelectorAll("input.getElButton"))
};

function changeHeaderColor() {
    let h3 = document.getElementById("funcButtons").querySelectorAll("h3");
    h3[1].style.color = "#b48ead";
};
function changeParagraphFont() {
    let p = document.getElementById("paragraphs");
    p.style.color = "#d08770";
    p.style.fontSize = "24px";
    p.style.fontFamily = "Hurricane";
};

function listTextChange() {
    let li = document.querySelectorAll("li");
    li[1].textContent = "Czerwone, mogą byc koktajlowe, malinowe, żółte, zielone, smaczny keczup z nich.";
    li[1].style.color = "#ff6347";
    li[2].textContent = "Można tak kogoś nazwać jak jest czerwony albo glupi. Robi sie z nich barszczyk czerwony dobry z uszkami.";
    li[2].style.color = "#673f45"
};

function boldListHeader() {
    document.getElementById("list-header").outerHTML = "<p><b>Ranking warzyw</b></p>";
};

function addClass() {
    document.getElementById("list").classList.add("circle");   
};

function addListElement() {
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode('Każdy Polak wewnętrznie jest cebulą');
    newLi.appendChild(newLiText);
    let position = document.getElementsByTagName('ul');
    position[0].appendChild(newLi);
};

// TYTUL ZMIANA KARTY
window.onload = function () {
    let pageTitle = document.title;
    let message = "Wróć na strone buraku!";

    document.addEventListener('visibilitychange', function(e) {
        let isActive = !document.hidden;

        if (!isActive) document.title = message;
        else document.title = pageTitle;
    });
};

// KOSTKA
document.getElementById("startDice").addEventListener('mouseover', () => {
    document.addEventListener('wheel', () => {
        let interval = setInterval(rolldice, 20);
        function rolldice() {
            let ranNum = Math.floor(1 + Math.random() * 6);
            document.getElementById("dice").innerHTML = ranNum;
        }
        document.getElementById("stopDice").addEventListener('click', () => {
            clearInterval(interval);
            let result = document.getElementById("dice").textContent;
            Swal.fire({
                title: 'Wynik rzutu kostką: '+ result,
                timer: 1000
            })
        });
    });
});

// ZDJECIE BURAK
var img = document.getElementsByTagName("img")[1];
img.addEventListener('mouseover', () => {
    img.src = "beetroot_meme.jpg";
});
img.addEventListener('mouseout', () => {
    img.src = "beetroot_man.jpg";
});

// POLE LOGIN KOLOR
document.getElementById("login").addEventListener("keydown", () => {
    document.getElementById("login").style.backgroundColor = "#81a1c1";
});
document.getElementById("login").addEventListener("keyup", () => {
    document.getElementById("login").style.backgroundColor = "#5e81ac";
});

// CZYSZCZENIE FORMULARZA
function clearForm() {
    document.getElementById("login").style.backgroundColor = "white";
    document.forms[0].reset();
};

document.addEventListener('load', () => {
    clearForm();
});

// WYLACZENIE SUBMIT
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    let emailVal = e.currentTarget.email.value;
    let loginVal = e.currentTarget.login.value;
    const atChar = "@";
    if (email.value.includes(atChar))
    Swal.fire(
        "Wypelniono i sprawdzono formularz!",
        "Email: " + emailVal + " ; Login: " + loginVal,
        "success",
        );
    e.preventDefault();
});

// POKAZYWANIE HASLA
document.getElementById("togglePwd").addEventListener('click', () => {
    const pwd = document.getElementById("password");
    const togglePwd = document.getElementById("togglePwd");
    if (togglePwd.checked) pwd.type = "text"
    else pwd.type = "password";
});

// SPRAWDZANIE MALPA
const email = document.getElementById("email");
email.addEventListener('keyup', () => {
    const mailInfo = document.getElementById("mailInfo");
    const atChar = "@";
    
    if (!email.value.includes(atChar)){
        mailInfo.innerHTML = "Niepoprawny format maila!";
        email.style.border = "#bf616a solid 2px"
    } else {
        mailInfo.innerHTML = "";
        email.style.border = "#8fbcbb solid 2px"
    }
});


const mailField = document.getElementById("email");
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");

mailField.addEventListener('focus', () => {
    mailField.style.backgroundColor = "#8fbcbb";
});
mailField.addEventListener('blur', () => {
    mailField.style.backgroundColor = "#fff";
});
loginField.addEventListener('focus', () => {
    loginField.style.backgroundColor = "#8fbcbb";
});
loginField.addEventListener('blur', () => {
    loginField.style.backgroundColor = "#fff";
});
passwordField.addEventListener('focus', () => {
    passwordField.style.backgroundColor = "#8fbcbb";
});
passwordField.addEventListener('blur', () => {
    passwordField.style.backgroundColor = "#fff";
});



