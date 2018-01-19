# calqlate
A nodejs module for performing calculations

## Usage
### add
Takes any number of values, at least 2, and adds them together.
```javascript
var calqlate = require('calqlate')
add = calqlate.add;
var a = 1;
var b = 2;
var c = 3
console.log(add(1, 2));
console.log(add(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### subtract
Takes any number of values, at least 2, and subtracts them.
```javascript
var calqlate = require('calqlate')
subtract = calqlate.subtract;
var a = 1;
var b = 2;
var c = 3
console.log(subtract(1, 2));
console.log(subtract(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### multiply
Takes any number of values, at least 2, and multiplies them.
```javascript
var calqlate = require('calqlate')
multiply = calqlate.multiply;
var a = 1;
var b = 2;
var c = 3
console.log(multiply(1, 2));
console.log(multiply(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### divide
Takes any number of values, at least 2, and divides them.
```javascript
var calqlate = require('calqlate')
divide = calqlate.divide;
var a = 1;
var b = 2;
var c = 3
console.log(divide(1, 2, 3));
console.log(divide(a, b, c));
console.log(divide(a, 2, c, 4));
```
### squareArea
Takes two sides of a square and calculates the area. Supporting both quadrat and rectangle.
```javascript
var calqlate = require('calqlate')
squareArea = calqlate.squareArea;
var a = 1;
var b = 2;
console.log(squareArea(1, 2)); // calculate rectangle
console.log(squareArea(a, b)); // calculate rectangle
console.log(squareArea(a, 2)); // calculate rectangle
console.log(squareArea(a)); // calculate quadrat
console.log(squareArea(3)); // calculate quadrat
```
### squarePerimiter
Takes two sides of a square and calculates the perimiter. Supporting both quadrat and rectangle.
```javascript
var calqlate = require('calqlate')
squarePerimiter = calqlate.squarePerimiter;
var a = 1;
var b = 2;
console.log(squarePerimiter(1, 2)); // calculate rectangle
console.log(squarePerimiter(a, b)); // calculate rectangle
console.log(squarePerimiter(a, 2)); // calculate rectangle
console.log(squarePerimiter(b));  // calculate quadrat
console.log(squarePerimiter(3)); // calculate quadrat
```
### squareDiagonalLength
Takes two sides of a square and calculates the diagonal length. Supporting both quadrat and rectangle.
```javascript
var calqlate = require('calqlate')
squareDiagonalLength = calqlate.squareDiagonalLength;
var a = 1;
var b = 2;
console.log(squareDiagonalLength(1, 2)); // calculate rectangle
console.log(squareDiagonalLength(a, b)); // calculate rectangle
console.log(squareDiagonalLength(a, 2)); // calculate rectangle
console.log(squareDiagonalLength(b)); // calculate quadrat
console.log(squareDiagonalLength(3)); // calcualte quadrat
```

## Tests

npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
