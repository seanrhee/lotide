// assertEqual function for testing
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `${actual} !== ${expected}`);
};

// head function should return the first element of an array
const head = function (arr){
  return arr[0];
}

assertEqual(head([1,2,3]), 1);

assertEqual(head(["Lighthouse", "Labs"]), "Hello");
