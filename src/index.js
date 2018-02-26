let Type = require('./Type');

let and = require('./types/and');
let apply = require('./types/apply');
let arrayOf = require('./types/arrayOf');
let oneOf = require('./types/oneOf');
let instanceOf = require('./types/instanceOf');
let not = require('./types/not');
let or = require('./types/or');
let shape = require('./types/shape');
let typeOf = require('./types/typeOf');


module.exports = {
  undefined: typeOf('undefined'),
  bool: typeOf('boolean'), // simple
  func: typeOf('function'), // simple
  number: typeOf('number'), // simple
  string: typeOf('string'), // simple
  null: typeOf('null'),
  object: typeOf('object'),
  array: typeOf('array'),
  and: and,
  or: or,
  not: not,
  any: new Type(function() { return true; }),
  instanceOf: instanceOf,
  typeOf: typeOf,
  in: oneOf,
  oneOf: oneOf, // cname of `in`, name from prop-types
  oneOfType: or, // cname of `or`, name from prop-types
  arrayOf: arrayOf,
  shape: shape,
  apply: apply
};
