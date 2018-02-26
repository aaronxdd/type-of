let Type = require('../Type');

/**
 * 与逻辑
 * @param types
 * @returns {Type}
 */
module.exports = function(types) {
  return new Type(function(v) {
    let l = types.length;
    for (let i = 0; i < l; i ++) {
      // 必须都符合才行
      if (!types[i].check(v)) return false;
    }
    return true;
  });
};
