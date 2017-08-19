"use strict"

var wojtek = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function() {
        console.log("Cześć jestem " + this.imie);
    }
}

console.log(wojtek.imie);
console.log(wojtek.wzrost);

wojtek.przedstawOsobe();