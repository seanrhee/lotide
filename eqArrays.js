// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // check if both arrays have same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // loop each element
  for (let i = 0; i < arr1.length; i++) {
    // if element is an Array
    if (Array.isArray(arr1[i])) {
      // recursion here. if recursion returns false, program returns false
      if (!eqArrays(arr1[i], arr2[i])){
        return false;
      };
    } else {
      // check if element is the same
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  // if program hasn't returned false above, return true
  return true;
};


// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 3])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]))// => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]))// => false