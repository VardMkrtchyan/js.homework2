 "use strict";

 //Տնային 1
 class Flower {
    static qanak = 0
    constructor(count){
        this.count = count
        Flower.qanak += this.count
    }
}

class Vard extends Flower {
    
}

class Mexak extends Flower {
    
}

class Kakach extends Flower {
    
}

class Kala extends Flower {

}

class Manushak extends Flower {

}

let bouquet = [
    new Vard(5), 
    new Mexak(13), 
    new Kakach(7), 
    new Kala(1),
    new Manushak(11)]

let bouquetTwo = [
    new Vard(3), 
    new Mexak(3), 
    new Kakach(3), 
    new Kala(3),
    new Manushak(3)]

let bouquetThree = [
    new Vard(33)
]

console.log(bouquetTwo);
console.log(Flower.qanak);

//Տնային 2

class Vehicle {
    technicalDevice
    forTransportation
    wheel

    _rail
    _ski

    get rail (){
    }
    set rail(value){
        return this._rail = value;
    }

    get ski (){
    }
    set ski(value){
        return this._ski = value;
    }

    #country
    #forSale
    #highQuality


}

class Sayl extends Vehicle {
    shinararakanSayl
    mankakanSayl

    _hashmandamiSaylak

    get hashmandamiSaylak(){
    }
    set hashmandamiSaylak(value){
        return this._hashmandamiSaylak = value;
    }

    #bazmafunkcional
    #dekorativSaylak
}

class MardatarAvtomeqena extends Vehicle {
    horsePower
    color

    _madeIn
    get madeIn() {
    }
    set madeIn(value) {
        this._madeIn = value;
    }

    #cost
    #noTuning
}

class BernatarAvtomeqena extends Vehicle {
    taroxutyun
    type

    _madeFor
    get madeFor() {
    }
    set madeFor(value) {
        this._madeFor = value;
    }

    #engineNumber
    #maxSpeed
}


//Տնային 3

class ArramSum extends Array {
    ;
    sum (){
        let result = 0
        for(let i=0; i < this.length; i++){
            if(typeof this[i] === "number"){
                result += i
            }
        }
        return result
    }
}

let a = new ArramSum (1, 2, 3, 4, 5, 6, 7);

console.log(a.sum());