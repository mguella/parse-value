# ParseValue

## Installation

```
npm install --save parse-value
```

## Usage

```javascript
// require parseValue
var parseValue = require('parse-value');

// define type and value
var type = 'number',
    value = '3';

// parse value to requested type
var number = parseValue(type, value);
```


## Documentation

**parseValue(type, value)**

- String `type`: type to use
    - 'string' (default), 'number', 'int', 'integer', 'float', 'date', 'bool', 'boolean', 'regex', 'regexp', 'null'
- Object `value`: value to parse


## Examples

### String

```javascript
parseValue('string','test')
// 'test'
parseValue('string', 3)
// '3'
```


### Number

```javascript
parseValue('number','3')
// 3
parseValue('number','3.2')
// 3.2

parseValue('number', 'abc')
// NaN

parseValue('int','3')
// 3
parseValue('int','3.2')
// 3

parseValue('float','3.2')
// 3.2
```


### Date

```javascript
parseValue('date', '2000-01-01')
// Sat Jan 01 2000 01:00:00 GMT+0100 (CET)
parseValue('date', 946684800000)
// Sat Jan 01 2000 01:00:00 GMT+0100 (CET)

parseValue('date', 'abc')
// Invalid Date
```


### Bool

```javascript
parseValue('bool', true)
// true
parseValue('bool', 1)
// true
parseValue('bool', 'true')
// true
parseValue('bool', 't')
// true
parseValue('bool', 'yes')
// true
parseValue('bool', 'y')
// true

parseValue('bool', false)
// false
parseValue('bool', 0)
// false
parseValue('bool', 'false')
// false
parseValue('bool', 'f')
// false
parseValue('bool', 'no')
// false
parseValue('bool', 'n')
// false
parseValue('bool', null)
// false
```


### Regex

```javascript
parseValue('regex', 'a+b')
// /a+b/gm
parseValue('regex', '.*\\.js')
// /.*\.js/gm
```


### Null

```javascript
parseValue('null', 'anyValue')
// null
parseValue('null', 3)
// null
```
