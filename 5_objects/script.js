const pb95 = 6;
var today = new Date();
var year = today.getFullYear();

console.log(year);

const oferta = {
    marka: "Kia",
    model: "Carens",
    cena: 60000,
    spalanie: 8,
    prodYear: 2015,
    koszt100km: function() {
        // return 37 + " zł";
        return pb95 * this.spalanie + " zł";
    },
    wiekSamochodu: function() {
        return year - this.prodYear + " lat";
    }
}

function Oferta (marka, model, cena, spalanie, prodYear) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.prodYear - prodYear;

    this.printAll = function() {
        return this.marka + " " + this.model + " " + this.cena + " zł " + this.spalanie + "l/100 " + this.prodYear + " rok";
    }
}

console.log(oferta.koszt100km());
console.log(oferta.wiekSamochodu());

const oferta1 = new Oferta('Honda', 'Accord', 20000, 7, 2006);
console.log(oferta1.printAll());
