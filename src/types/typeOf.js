let Type = require('../Type');
let what = require('../what');

/**
 * judge the type of variable
 * @param type
 * @returns {Type}
 */
module.exports = function (type) {
    return new Type(function (variable) {
        return what(variable) === type;
    })
};