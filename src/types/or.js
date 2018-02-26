let Type = require('../Type');

/**
 * 或逻辑
 * @param types
 * @returns {Type}
 */
module.exports = function(types) {
  return new Type(function(v) {
    let l = types.length;
    for (let i = 0; i < l; i ++) {
      // 只有有一个符合即可
      if (types[i].check(v)) return true;
    }
    return false;
  })
};
