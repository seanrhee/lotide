// import modules
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  // 1. if arr.length > 2 and arr.length is odd
  //  1a. arr.slice(Math.floor(arr.length / 2), Math.ceil(arr.length / 2)) 
  // 2. if arr.length is even
  //  2a. arr.slice((arr.length / 2)) - 1, arr.length / 2)
  if (arr.length > 2) {
    if (arr.length % 2 === 1) {
      return arr.slice(Math.floor(arr.length / 2), Math.ceil(arr.length / 2));
    }else if (arr.length % 2 === 0){
      return arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1);
    }
  }

  return [];
}

module.exports = middle;