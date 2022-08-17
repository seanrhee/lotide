// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  // 1. loop through obj
  // 2. compare obj value to val
  // 3. if true, return key

  for(const show in obj){
    if(obj[show] === val){
      return show;
    }
  }
}

// test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);