const eqObjects = require('./index').eqObjects;

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