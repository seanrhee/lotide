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

module.exports = without;
