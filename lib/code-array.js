/**
 * Created by jarst on 2016-08-31.
 */

function isString(o) {
    return typeof o === 'string' || o instanceof String;
}

function asCodeArray(e) {
    return [e];
}

function asOctetArray(code) {
    return [(code & 0xff00) >> 8, code & 0x00ff];
}

/**
 * Converts String to Array of UTF-16 character codes.
 * @param {string} str
 * @returns {Number[]}
 */
function stringToCodeArray(str, transformCode) {
    var code, codes = [];
    if (isString(str)) {
        for (var i = 0; i < str.length; ++i) {
            code = str.charCodeAt(i);
            Array.prototype.push.apply(codes, transformCode(code))
        }
    }
    return codes;
}

/**
 * Converts Array of UTF-16 character codes to String.
 * @param {Number[]} codes
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

function fromOctets(first, second) {
    return (first << 8) | second;
}

function octetArrayToString(octets) {
    var str = '';
    if (Array.isArray(octets)) {
        for (var i = 0; i < octets.length; i += 2) {
            var first = +octets[i];
            var second = +octets[i + 1];
            if (first && second) {
                str += String.fromCharCode(fromOctets(first, second));
            }
        }
    }
    return str;
}

module.exports = {
    /** @deprecated */
    fromString: function(str) {
        return stringToCodeArray(str, asCodeArray)
    },
    /** @deprecated */
    toString: codeArrayToString,

    toCodes: function(str) {
        return stringToCodeArray(str, asCodeArray)
    },
    fromCodes: codeArrayToString,

    toOctets: function(str) {
        return stringToCodeArray(str, asOctetArray);
    },
    fromOctets: octetArrayToString
};