//importing local module
const importedSum = require('./myModule');

//importing npm express module
const express = require('express');

//use dot notation to access individual methods of imported object
const res = importedSum.sum(9,10);

console.log(importedSum);