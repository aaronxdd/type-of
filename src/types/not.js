let Type = require('../Type');

/**
 * 非逻辑
 * @param type
 * @returns {Type}
 */
module.exports = function(type) {
  return new Type(function(v) {
    return !type.check(v);
  });
};
