/**
 * get the type of variable
 * @param variable
 * @returns {string}
 */
function what(variable) {
    // null and undefined
    if (variable === null) return 'null';
    if (variable === undefined) return 'undefined';
    let type = typeof variable;
    // common type
    if (
        type === 'string' ||
        type === 'number' ||
        type === 'function' ||
        type === 'boolean'
    ) return type;
    // other objects
    return ({}).toString.call(variable).slice(8, -1).toLowerCase();
}

module.exports = what;