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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // check if objects have same # of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;  
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])){
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// const ab = { a: "1", b: "2", c: "3" };
// const ba = { b: "2", a: "1", d: "3" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3"};
// assertEqual(eqObjects(ab, abc), true); // => false

// const cd = { c: "1", d: ["2", 4, 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false