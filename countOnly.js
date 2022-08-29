// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // create empty object
  const results = {}

  // loop through the array
  for (const item of allItems){
    // if item exists as a key in itemsToCount
    if (itemsToCount[item]){
      // if item exists as a key in results
      if (results[item]){
        // add one to its value
        results[item] += 1;
      } else {
        // if it doesn't exist as a key, set the value of the key to 1
        results[item] = 1;
      }
    }
  }

  // return object
  return results;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;