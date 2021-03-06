code-array
----------
[![Build Status](https://travis-ci.org/jarst/code-array.svg?branch=master)](https://travis-ci.org/jarst/code-array)
[![Coverage Status](https://coveralls.io/repos/github/jarst/code-array/badge.svg)](https://coveralls.io/github/jarst/code-array)
[![npm:](https://img.shields.io/npm/v/code-array.svg)](https://www.npmjs.com/packages/code-array)
[![dependencies](https://img.shields.io/badge/dependencies-none-green.svg)](https://img.shields.io/badge/dependencies-none-green.svg)
[![license:mit](https://img.shields.io/badge/license-mit-green.svg)](#license)


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
