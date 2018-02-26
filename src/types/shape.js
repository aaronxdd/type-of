let Type = require('../Type');

/**
 * object 结构
 * @param typeObj
 * @returns {Type}
 */
module.exports = function(typeObj) {
  return new Type(function(v) {
    for (let key in typeObj) {
      // if (typeObj.hasOwnProperty(key)) {
      if(!typeObj[key].check(v[key])) return false;
      // }
    }
    return true;
  });
};
