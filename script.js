'use strict';

let num = [1,2,3,4,5];
let res = 0;

for (let index = 0; index < num.length; index++) {
   res += num[index];
}
console.log(res);
console.log(res ** 3);
console.log(res.substring(2));