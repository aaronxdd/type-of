let Type = require('../Type');

/**
 * array 元素内容
 * @param type
 * @returns {Type}
 */
module.exports = function(type) {
  return new Type(function(v) {
    // TODO v should be Array
    let l = v.length;
    if (l === undefined) return false;
    for (let i = 0; i < l; i ++) {
      if (!type.check(v[i])) return false;
    }
    return true;
  });
};
