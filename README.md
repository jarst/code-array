code-array
----------
[![Build Status](https://travis-ci.org/jarst/code-array.svg?branch=master)](https://travis-ci.org/jarst/code-array)
[![npm:](https://img.shields.io/npm/v/code-array.svg)](https://www.npmjs.com/packages/code-array)

Simple utility module that will help you with converting:
 * strings to character code arrays
 * character code arrays to strings

 ## Installation
 `npm install code-array --save`

 ## Example usage

```
 var codeArray = require('code-array');

 var arr = codeArray.fromString('ABC'); // arr is  [65, 66, 67]

 var str = codeArray.toString([65, 66, 67]); // str is 'ABC'
 ```



