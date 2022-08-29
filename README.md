# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leeseancw/lotide`

**Require it:**

`const _ = require('@leeseancw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: assertion function that compares 2 arrays
* `assertEqual(actual, expected)`: assertion function that compares 2 primitives
* `assertObjectsEqual(obj1, obj2)`: assertion function that compares 2 objects (which are not arrays)
* `countLetters(sentence)`: function that takes in a string and catalogues each instance of each unique character
* `countOnly(allItems, itemsToCount)`: function that counts for specific elements listed in itemsToCount in allItems
* `eqArrays(arr1, arr2)`: function that checks if 2 arrays are absolutely identical
* `eqObjects(object1, object2)`: function that checks if 2 objects (not arrays) are absolutely identical
* `findKey(object, callback)`: function that scans the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue(obj, val)`: function that takes in an object and a value. It should scan the object and return the first key which contains the given value. 
* `flatten(arr)`: a duplicate function of the built-in .flat()
* `head(arr)`: function that returns the first element of an array
* `letterPosition(sentence)`: functoin that returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: a duplicate function of the built-in .map()
* `middle(arr)`: function that takes an array and returns the middle (or 2 middle) value in an array
* `tail(arr)`: function that returns an array without the first element
* `takeUntil(array, callback)`: function that takes an array and returns a new array with elements up to when the callback function returns truthy
* `without(source, itemsToRemove)`: a similar function to the built-in .filter()
