// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// head function should return the first element of an array
const head = function (arr){
  return arr[0];
}

assertEqual(head([1,2,3]), 1);

assertEqual(head(["Lighthouse", "Labs"]), "Hello");
