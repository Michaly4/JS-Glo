'use strict'
/*
let num = 266219;

let numArray = num.toString().split('');
console.log(numArray); 
let res = [];

for (let i = 0; i < numArray.length; i++) {
   res *= numArray[i];
}
console.log(res);
console.log(String((res ** 3)).slice(0,2));
*/

//let title = "  Priwet  ";
let title = "  0123456789112345678901234567890  ";
console.log(title.length);

function getPruf(arg) {
   if (arg !== "") {
      arg = arg.substring(0, 30) + "...";
      arg = arg.trim();
      console.log(arg.length);
      return arg;
   } else {
      return "string leer";
   }
}
console.log(getPruf(title));




/* let pow = res ** 3;
console.log(String(pow).substring(0,2)); */