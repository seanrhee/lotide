const countLetters = function(sentence) {
  // create empty object
  const results = {};

  // loop through each character of the string
  for (const letter of sentence) {
    // check if character is a space
    if (letter !== ' '){
      // if character is not a key in results
      if (!results[letter]){
        // add the key and set its value to 1
        results[letter] = 1;
      } else {
        // increase value by 1 if character exists as a key in results
        results[letter] += 1;
      }
    }
  }

  // return object
  return results;
}

module.exports = countLetters;