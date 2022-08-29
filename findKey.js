const findKey = function(object, callback) {
  for (const key in object){
    if(callback(object[key])){
      return key;
    }
  }
}

// let a = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 3 },
//   "elBulli":   { stars: 2 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars > 2) // => "noma"

// console.log(a);

module.exports = findKey;