"use strict";

 let first = "";
 for (let row = 0; row < 10; row++) {
     for (let asterisk = 0; asterisk < row + 1; asterisk++) {
         first+= " *";
     }
     first +="\n";
 } console.log(first);

// second
let second = "";
for(let a=0; a<11; a++){
    for(let b=a; b<11; b++){
        second +="  ";
    }
    for(let asterisk=0; asterisk<a; asterisk++){
        second +=" *";
    }
    second+="\n";
}console.log(second);


// third
 let third = "";
 for (let row = 0; row < 10; row++) {
     for (let asterisk = 0; asterisk < 10 - row; asterisk++) {
         third+= " *";
     }
     third +="\n";
 } console.log(third);

//  fourth
let fourth = "";
for(let a=0; a<10; a++){
    for(let b=0; b<a; b++){
        fourth +="  ";
    }
    for(let asterisk=a; asterisk<10; asterisk++){
        fourth +=" *";
    }
    fourth+="\n";
}console.log(fourth);

// fifth
let fifth = "";
for(let a=0; a<11; a++){
    for(let b=a; b<11; b++){
        fifth +=" ";
    }
    for(let asterisk=0; asterisk<a; asterisk++){
        fifth +=" *";
    }
    fifth+="\n";
}console.log(fifth)


// fifth
let fi = "";
for(let a=0; a<3; a++){
    for(let b=0; b<7-a; b++){
        fi +=" ";
    }
    for(let asterisk=0; asterisk<a+1; asterisk++){
        fi +=" *";
    }
    fi+="\n";
}
for(let a=1; a<4; a++){
    for(let b=0; b<7-a; b++){
        fi +=" ";
    }
    for(let asterisk=0; asterisk<a+1; asterisk++){
        fi +=" *";
    }
    fi+="\n";
}
for(let a=2; a<5; a++){
    for(let b=a; b<7; b++){
        fi +=" ";
    }
    for(let asterisk=0; asterisk<a+1; asterisk++){
        fi +=" *";
    }
    fi+="\n";
}console.log(fi)