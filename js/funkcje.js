"use strict";

function multiply(param1){
    var iloczyn = 1;
    if(param1.length != 0){
        for(var i = 0; i < param1.length; i++){
            iloczyn *= param1[i];
        }
    } else {
        iloczyn = 0;
    }
    
    return iloczyn;
}

var tablica = [2,3,4];

console.log(multiply(tablica));

