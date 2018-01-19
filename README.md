# calqlate
A nodejs module for performing calculations

## Usage
### add
```javascript
var calqlate = require('calqlate')
add = calqlate.add;
var a = 1;
var b = 2;
var c = 3
console.log(add(1, 2, 3));
console.log(add(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### subtract
```javascript
var calqlate = require('calqlate')
subtract = calqlate.subtract;
var a = 1;
var b = 2;
var c = 3
console.log(subtract(1, 2, 3));
console.log(subtract(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### multiply
```javascript
var calqlate = require('calqlate')
multiply = calqlate.multiply;
var a = 1;
var b = 2;
var c = 3
console.log(multiply(1, 2, 3));
console.log(multiply(a, b, c));
console.log(multiply(a, 2, c, 4));
```
### divide
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
```javascript
var calqlate = require('calqlate')
squareArea = calqlate.squareArea;
var a = 1;
var b = 2;
console.log(squareArea(1, 2));
console.log(squareArea(a, b));
console.log(squareArea(a, 2));
console.log(squareArea(b));
console.log(squareArea(3));
```
### squarePerimiter
```javascript
var calqlate = require('calqlate')
squarePerimiter = calqlate.squarePerimiter;
var a = 1;
var b = 2;
console.log(squarePerimiter(1, 2));
console.log(squarePerimiter(a, b));
console.log(squarePerimiter(a, 2));
console.log(squarePerimiter(b));
console.log(squarePerimiter(3));
```
### squareDiagonalLength
```javascript
var calqlate = require('calqlate')
squareDiagonalLength = calqlate.squareDiagonalLength;
var a = 1;
var b = 2;
console.log(squareDiagonalLength(1, 2));
console.log(squareDiagonalLength(a, b));
console.log(squareDiagonalLength(a, 2));
console.log(squareDiagonalLength(b));
console.log(squareDiagonalLength(3));
```

## Tests

npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
