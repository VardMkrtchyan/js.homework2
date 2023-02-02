"use strict";

// Հայրիկը գնել է 4 տուփ մատիտ, քանի հատ մատիտ կա եթե յուրաքանչյուր տուփում 15 մատիտ է?

function pencil() {
    let bought = 4;
    let count = 15*bought;
    return count;
} console.log(pencil());


// Ակնոցներ պատրաստելու համար օգտագործվել է 14 կտոր ապակի, քանի հատ ակնոց է պատրաստռել վարպետը?

function glases () {
    let used = 14;
    let prepared = used / 2;
    return prepared;
}console.log(glases());

// Կարմիր ժապավենը 55 սմ է, կապույտը 27սմ է իսկ դեղինը 37սմ։ Ընդհամենը քանի մետր ժապավեն կա?

function ribbon () {
    let red = 55;
    let blue = 27;
    let yellow = 37;
    let together = red + blue + yellow;
    return together;
}console.log(ribbon());

// Առաջին օրը կարդաց 8 էջ, երկրորդ օրը 7 էջով ավելի, ընդհամենը քանի էջ կարդաց?

function book () {
    let dayOne = 8;
    let dayTwo = dayOne + 7;
    let all = dayTwo + dayOne;
    return all;
}console.log(book());

// Անին ուներ 11 տետր, Արան ուներ 13 տետր իսկ Սոնան տետր չուներ։ Նրանք տետրերը հավասարապես բաժանեցին 3 մասի, քանի տետր ունեցավ յուրաքանչյուրը?

function notebook () {
    let ani = 11;
    let ara = 13;
    let sona = (ani + ara) / 3;
    return sona;
}console.log(notebook());

//  Հայրիկը գնել է 2 փաթեթ պարան, մեկի երկարությունը 125մ է, իսկ մյուսը 25մ -ով ավելի է։ Ընդհամենը քանի մետր պարան գնեց հայրիկը?
 
function rope () {
    let first = 125;
    let second = first + 25;
    let allTogether = (second + first) * 2;
    return allTogether;
}console.log(rope());

// Մի տակառում կա 420 լ հյութ, մյուսում 140լ - ով պակաս։ Քանի լիտր հյութ կա  երկու տակառում?

function juice () {
    let firstBarrel = 420;
    let secondBarrel = firstBarrel - 140;
    let inTwoBarrels = firstBarrel + secondBarrel;
    return inTwoBarrels;
}console.log(juice());

function num () {
    let x = 60;
    let y = 245;
    let z = 4;
    let a = x + (y * z);
    return a;
} console.log(num());





