// tail function returns a new array that excludes the first element
// if array only has one element or is empty, it will return an empty array.
const tail = function(arr) {
  let sliced = arr.slice(1);
  
  return sliced;
};

module.exports = tail;