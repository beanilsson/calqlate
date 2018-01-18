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

## Tests

npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
