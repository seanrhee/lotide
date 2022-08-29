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

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === 'object') {
      console.log("Recursing")
      return eqObjects(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// console.log(eqObjects({ a: { z: [1,2] }, b: 2 }, { a: { z: [1] }, b: 2})) // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1, y: 0 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false