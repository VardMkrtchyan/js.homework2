"use strict";

function Animal(name, breath, eat) {
  this.name = name,
  this.breath = true;
  this.eat = true;
}

function TnayinKendaniner(name) {
  this.name = name;
  this.varjecrac = "Ընտելացած է";
  this.__proto__ = Animal;
}

function Jrayin(name) {
  this.name = name;
  this.theGils = "Շնչում են խռիկներով";
  this.fishFin = "Տեղաշարժվում են լողակների օգնությամբ";
  this.__proto__ = Animal;
}

function Birds(name) {
  this.name = name;
  this.fly = "Թռիչքը թռչնատեսակների մեծ մասի համար տեղաշարժվելու հիմնական միջոցն է";
  this.wings = "Առջևի վերջույթները ձևափոխվել են թևերի";
  this.feathers = "Թռչունների մարմինը ծածկված է փետուրներով";
  this.beak = "Ծնոտները ձևափոխվել են եղջերավոր կտուցի, որ կազմված է վերնակտուցից և ենթակտուցից"
  this.__proto__ = Animal;
}


let eagle = new Birds("Eagle");
console.log(eagle);

let dog = new TnayinKendaniner("Dog");
console.log(dog);

let dolphin = new Jrayin("Dolphin");
console.log(dolphin);
