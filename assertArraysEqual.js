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

assertArraysEqual([1,2,3],[1,2,3,4]);