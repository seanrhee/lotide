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

const assertObjectsEqual = function(obj1, obj2) {

  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

// assertObjectsEqual({a: 1, c: 2}, {a: 1, c: 2});

module.exports = assertObjectsEqual;