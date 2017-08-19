"use strict";

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow = imiona.push("Geralt");
console.log(imiona);
console.log(ileElementow);

var usunietyElement = imiona.pop(imiona);
console.log(imiona);
console.log(usunietyElement);


console.log(imiona);
console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log("Ilosc elementów w tablicy: " + imiona.length);

var imie = "Adam";
console.log("Dlugosc : " + imie.length);

console.log("*****************************");
console.log(imiona);
console.log(imiona.join());
console.log(imiona.join(" - "));

console.log("*****************************");
console.log(imiona.reverse());
console.log(imiona.join());

console.log("*****************************");
console.log(imiona.sort());

var imionaMeskie = ["Wojtek", "Michał", "Andrzej"];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona meskie: " + imionaMeskie);


/* Przydatne funkcje */

console.log(zbiorImion.indexOf("Michał"));

//Zwraca true jeśli argument jest tablicą, false jeżeli nie.
console.log(Array.isArray(zbiorImion));

//wycina indexy od 2 do 5.
console.log(zbiorImion.slice(2,5));

//usuwa elementu od 2 i usuwa 3 kolejne elem.  Potem dodaje imiona.
zbiorImion.splice(2,3, "Zenek", "Grzegorz", "Darek")
console.log(zbiorImion);


