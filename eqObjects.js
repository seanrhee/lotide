// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // 1. loop through the number of element in arr1
  // 2. compare whether or not arr1[i] === arr2[i]
  // 3. if true, set output to true .. else, set output to false
  // 4. return output

  let longerArray;

  if (arr1.length > arr2.length) {
    longerArray = arr1;
  } else {
    longerArray = arr2;
  }

  let output = true;

  for (let i = 0; i < longerArray.length; i++) {
    if (arr1[i] === arr2[i]) {
      output = true;
    } else {
      return false;
    }
  }
  
  return output;
};

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // check if objects have same # of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;  
  }

  // loop through keys
  for (const key of Object.keys(object1)) {
    // check if value of key is a type 'object'
    if (typeof object1[key] === 'object') {
      // check if value of key is an array
      if (Array.isArray(object1[key])) {
        // run eqArrays, and if it returns false, the program also returns false
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      // recursion here. if it returns false, program also returns false
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      };
    } else {
      // check if values of key are the same
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  // if we made it here, then return true
  return true;
};

// const ab = { a: "1", b: "2", c: "4" };
// const ba = { b: "2", a: "1", c: "4" };
// console.log(eqObjects(ab, ba)); // => true

// console.log(eqObjects({ a: { z: 1 }, b: {d:2} }, { a: { z: 1 }, b: {d:2}, c: 1})) // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1, y: 0 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

module.exports = eqObjects;