/*
Ծերացա սրա ձեռը...
Նախ use strict գրելով էսպիսի սխալ է առաջանում << Octal literals are not allowed in strict mode >>, 
փորձեցի խնդրին լուծում գտնել, ապարդյուն։ Բայց չհայտարարված ոչինչ չեմ օգտագործել։


և ինչու է undefined? 
Հայտարարել եմ, վերագրել եմ, արժեք փոխանցել եմ

*/

// "use strict";
function MyDate( year, month = 0, date = 1, hour = 0, minute = 0, second = 0, mili = 0)  {
    if(!year === 0) {
        return new Date(0)
    }
    if(!month) {
        return new Date()
    };
    this._year = year;
    this._month = month;
    this._date = date;
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._mili = mili;
    this.toString = function () {
         return `${this.year}.${this.month}.${this.date}.${this.hour}.${this.minute}.${this.second}.${this.mili} `
    }
};

Object.defineProperty(this, "year", {
    set:(value) =>{
        this._year = value;
    },
    get:() =>{
        return this._year
    }
}),

Object.defineProperty(this, "month", {
    set:(value) =>{
        this.year += parseInt(value / 12);
        this._month = value % 12;
    },
    get:() =>{
        return this._month
    }
}),

Object.defineProperty(this, "date", {
    set:(value) =>{
        this.month += parseInt(value / 30);
        this._date = value % 30;
    },
    get:() =>{
        return this._date
    }
}),

Object.defineProperty(this, "hour", {
    set:(value) =>{
        this.date += parseInt(value / 24);
        this._hour = value % 24;
    },
    get:() =>{
        return this._hour
    }
}),

Object.defineProperty(this, "minute", {
    set:(value) =>{
        this.hour += parseInt(value / 60);
        this._date = value % 60;
    },
    get:() =>{
        return this._minute
    }
}),

Object.defineProperty(this, "second", {
    set:(value) =>{
        this.minute += parseInt(value / 60);
        this._second = value % 60;
    },
    get:() =>{
        return this._second
    }
}),

Object.defineProperty(this, "mili", {
    set:(value) =>{
        this.second += parseInt(value / 1000);
        this._mili = value % 1000;
    },
    get:() =>{
        return this._mili
    }
})

let calendar = new MyDate(2000, 01, 24, 15, 33, 33, 33);

console.log(calendar.toString());