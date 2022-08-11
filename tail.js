// assertEqual function for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `${actual} !== ${expected}`);
};

// tail function returns a new array that excludes the first element
// if array only has one element or is empty, it will return an empty array.
const tail = function(arr) {
  let sliced = arr.slice(1);
  if (sliced.length < 2 || arr.length === 0) {
    return [];
  }
  return sliced;
};