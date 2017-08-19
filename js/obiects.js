"use strict"
//
//var wojtek = {
//    imie: "Wojtek",
//    wzrost: 181,
//    przedstawOsobe: function() {
//        console.log("Cześć jestem " + this.imie);
//    }
//}
//
//console.log(wojtek.imie);
//console.log(wojtek.wzrost);
//
//wojtek.przedstawOsobe();
//
//


class Osoba{
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
    }
    
    wyswietl(){
        console.log("Imię: " + this.imie + "\n"
                   + "Nazwisko: " + this.nazwisko + "\n"
                   + "Wzrost: " + this.wzrost + "\n"
                   + "Oczy: " + this.oczy);
    }
}

var wojtek = new Osoba("Wojtek", "Potocki");

wojtek.wzrost = 190;
wojtek.oczy = "niebieskie";

wojtek.wyswietl();





