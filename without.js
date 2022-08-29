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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const without = function(source, itemsToRemove) {
  // 1. turn itemsToRemove into a set (new Set)
  // 2. loop through source
  // 3. if itemsToRemove set doesn't contain current array element
  //  3a. push to output
  // 4. return output

  let output = [];

  let removeList = new Set(itemsToRemove);

  for (let element of source) {
    if (!removeList.has(element)) {
      output.push(element);
    }
  }

  return output;
};

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
