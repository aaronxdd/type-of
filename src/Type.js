/**
 * Type class
 * @param type
 * @constructor
 */
let Type = function (type) {
   this.type = type;
};

/**
 * check whether the variable match the type.
 * @param variable
 * @returns {*}
 */
Type.prototype.check = function (variable) {
    try{
        return this.type(variable);
    } catch (e){}
    return false;
};

/**
 * convent a type into optional.
 * 扩展运算，可选的校验
 * @returns {Type}
 */
Type.prototype.optional = function () {
    let self = this;
    return new Type(function (v) {
        return v === undefined || self.check(v);
    })
};

module.exports = Type;