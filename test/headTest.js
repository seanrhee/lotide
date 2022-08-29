// import head.js
const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST
assertEqual(head([1,2,3]), 1);
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
