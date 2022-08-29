const middle = require('../middle');
const eqArrays = require('../eqArrays');


console.log(eqArrays(middle([1]), []));
console.log(eqArrays(middle([1,2]), []));
console.log(eqArrays(middle([1,2,3]), [2]));
console.log(eqArrays(middle([1,2,3,4]), [2,3]));

