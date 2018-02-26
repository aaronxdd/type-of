let Type = require('../Type');

/**
 * 是否在数组中
 * @param arr
 * @returns {Type}
 */
module.exports = function(arr) {
  return new Type(function(v) {
    return arr.indexOf(v) >= 0;
  })
};
