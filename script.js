'use strict';

let num = 266219;

let numArray = num.toString().split('');
console.log(numArray); 
let res = 0;

for (let i = 0; i < numArray.length; i++) {
   res += numArray[i];
}
console.log(res);
console.log(String((res ** 3)).slice(0,2));




/* let pow = res ** 3;
console.log(String(pow).substring(0,2)); */
