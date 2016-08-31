/**
 * Created by jarst on 2016-08-31.
 */

function isString(o) {
    return typeof o === 'string' || o instanceof String;
}

/**
 * Converts String to Array of character codes.
 * @param str
 * @returns {Array}
 */
function stringToCodeArray(str) {
    var codes = [];
    if (isString(str)) {
        for (var i = 0; i < str.length; ++i) {
            codes.push(str.charCodeAt(i));
        }
    }
    return codes;
}

/**
 * Converts Array of character codes to String.
 * @param codes
 * @returns {string}
 */
function codeArrayToString(codes) {
    var str = '';
    if (Array.isArray(codes)) {
        for (var i = 0; i < codes.length; ++i) {
            var code = +codes[i];
            if (code) {
                str += String.fromCharCode(code);
            }
        }
    }
    return str;
}

module.exports = {
    fromString: stringToCodeArray,
    toString: codeArrayToString
};