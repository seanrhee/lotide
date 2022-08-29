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

module.exports = eqArrays;