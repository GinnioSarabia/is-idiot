const isIdiot = require('./index.js');

console.log(isIdiot()); // false
console.log(isIdiot('you')); // true
console.log(isIdiot('me')); // true
console.log(isIdiot('author of this package')); // true
console.log(isIdiot('node.js creator')); // true
console.log(isIdiot('every javascript "programmer"')); // true
