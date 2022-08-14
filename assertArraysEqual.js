const assertArraysEqual = function(arr1, arr2) {
  // 1. determine which arr is longer
  // 2. loop through the number of element in longer array
  // 3. compare whether or not arr1[i] === arr2[i]
  // 4. arr1[i] !== arr2[i], set output to false and print failed message, otherwise continue loop

  let longerArray;

  if (arr1.length > arr2.length) {
    longerArray = arr1;
  } else {
    longerArray = arr2;
  }

  let output = true;

  for (let i = 0; i < longerArray.length; i++) {
    if (arr1[i] !== arr2[i]) {
      output = false;
      console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
      break;
    }
  }
  
  if (output) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};


assertArraysEqual([1,2,3,4],[1,2,3,4]);