"use strict";

//charAt() վերադարձնում է փակագծերի մեջ նշված թվին համապատասխան ինդեքսով սիմվոլը
let city = "Gyumri";
console.log(city.charAt(3));

let country = "Armenia";
console.log(country.charAt(1));

//concat միավորում է մեկ ստրինգը մյուսին
let marz = city.concat("Shirak", "Armenia");
console.log(marz);

//includes նշված ստրինգի մեջ ման է գալիս փակագծերում գրվածը, վերադարձնում true - false
console.log(city.includes("yu"));
console.log(city.includes("yu", 4));
console.log(city.includes(5));

//indexOf վերադարձնում է փակագծում նշված արժեքի ինդեքսը, եթե նման բան չկա, կվերադարձնի -1
console.log(city.indexOf("m"));
console.log(city.indexOf("umri"));
console.log(city.indexOf("um", 4));
console.log(city.indexOf("yi"));

//Փոխարինել տեքստը մեկ այլ տեքստով
console.log(city.replace("yumri", "arni"));


//split բաժանում է ստրինգը ըստ փակագծում նշված սիմվոլի
let text = "Armenia Shirak Gyumri";
const  myText = text.split("");
console.log(myText);

//startsWith ստուգում է սկսվում է փակագծերում գրվածով էե ոչ, վերադարձնում է true - false
console.log(text.startsWith("Shirak"));
console.log(text.startsWith("Armenia"));
console.log(text.startsWith("Vanadzor"));

//բոլորը փոքրատառ
console.log(text.toLowerCase());

//բոլորը մեծատառ
console.log(text.toUpperCase());

//trim() հանում է պրաբելները սկսզբից և վերջից
let prabels = "    Armenia Shirak Gyumri        ";
console.log(prabels.trim());


//parseFloat Վերածում է տողը ոչ ամբողջական թվի, կետիկով։ հնարավորություն է տալիս ստանալ Number  որտեղ կարող ենք նշել նաև չափման միավորը, Եթե ստրինգը գրվի սկզբից կվերադարձնի NuN
console.log(parseFloat("10.3px"));

let width = "width: 100px";
console.log(parseFloat(width));

//parseInt Վերածում է տողը ամբողջական թվի,  Եթե ստրինգը գրվի սկզբից կվերադարձնի NuN
console.log(parseInt("10.3px"));
console.log(parseInt("10px"));

//toFixed քանի արժեք վերադարձվի կետիկից հետո
let num = 1249.2654658;
 console.log(num.toFixed(2));
 console.log(num.toFixed(5));
 console.log(num.toFixed(3));
 console.log(num.toFixed(7));

 //methodes of array

// concat երկու զանգվածները կպցնում է իրար
 let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let secondArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
 let thirdArray = firstArray.concat(secondArray);
 console.log(thirdArray);

//push   որպես էլեմենտ կավելացնի փակագծում նշվածը զակագծի վերջից
 firstArray.push(secondArray);
 firstArray.push("digital");
 console.log(firstArray);

 // shift հանում է առաջի էլեմենտը, մյուսները առաջ տեղաշարժելով
 let d = firstArray.shift();
 console.log(d);


 //միավորում է զանգվածի էլեմենտըները փակագծերում նշվածը դնելով արանքները
 let ray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 console.log(ray.join(";"));

//վերադարձնում է զանգվածում գտած առաջի էլելմենտը որը բավարարում է պայամանին
 let users = [
    {id: 1, name: "Mat", age: "25"},
    {id: 2, name: "Taylor", age: "42"},
    {id: 3, name: "Felix", age: "31"}
  ];
  
  let user = users.find(item => item.id == 1);
  console.log(user.name);

  let us = users.find(item => item.id == 3);
  console.log(us.name);

  let otherUsers = [
    {
        name: "Mat",
        age: 42
    },
    {
        name: "Taylor",
        age: 12
    },
    {
        name: "Felix",
        age: 37
    },
  ]

  const fn = (element,index,list) => {
    if (element.age > 30 ) return true
  }
console.log(otherUsers.find(fn));

//ստեղծում է նոր զանգված որը առաջանում է հին զանգվածի ֆիլտրացիայի արդյունքում
const filter = otherUsers.filter((element,index,list) => {
    return element.age > 30
  })
console.log((filter));


const map = otherUsers.map((element,index,list) => {
    return 2;
  })
console.log((map));

const makeMap = [2, 3, 4, 5, 6, 7, 66];
const makeNewMap = makeMap.map(item => {
    return item * 2
});
 console.log(makeNewMap)

 


