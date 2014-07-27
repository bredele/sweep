sweep
=====

  Sweep allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected. 

  Sweep is a partial implementation of the **spread** operator, part of the Harmony ECMSScript 6 proposal.


## Installation

component:

    $ component install bredele/sweep

nodejs:

    $ npm install sweep


## Usage

## a better apply

```js
var args = [0, 1, 2];
var cb = sweep(function(x, y, z) {
	// do something with x, y, z
});
cb(args);
```

## to array

```js

function() {
  var arr = spread(arguments);
  // arr is an array
};
```

## a better push

```js
var arr1 = [0, 1];
var arr2 = [3, 4];

var result = spread(arr1, 2, arr2);
// => [0, 1, 2, 3, 4];
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
