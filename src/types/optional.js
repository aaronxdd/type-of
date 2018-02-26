let Type = require('../Type');
let or = require('./or');
let typeOf = require('./typeOf');

/**
 * convent a type into optional.
 * 扩展运算，可选的校验
 * @param type
 * @returns Type
 */
module.exports = function(type) {
  return or([
    type,
    typeOf('undefined')
  ]);
};
