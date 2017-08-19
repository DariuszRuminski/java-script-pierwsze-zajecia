"use strict"

var osoba = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function() {
        console.log("Cześć jestem " + this.imie);
    }
}

console.log(osoba.imie);
console.log(osoba.wzrost);

osoba.imie = "Adam";
console.log(osoba.imie);
osoba.przedstawOsobe();