/**
 * Parse value
 * @param  {String} type=string     value type, one of number, date, bool, regex, string or null
 * @param  {Object} value           value to parse
 * @return {Object}                 parsed value
 */
module.exports = function parseValue(type, value) {
    var result = value;
    
    switch (type && type.toLowerCase()){
        case 'int':
        case 'integer':
            result = parseInt(value);
            break;
        case 'float':
            result = parseFloat(value);
            break;
        case 'number':
            result = new Number(value).valueOf();
            break;
        case 'date':
            result = new Date(value);
            break;
        case 'bool':
        case 'boolean':
            result = !!value
                && value !== 0
                && value !== '0'
                && value !== 'false'
                && value !== 'f'
                && value !== 'no'
                && value !== 'n';
            break;
        case 'regex':
        case 'regexp':
            result = RegExp(value, 'gm').valueOf();
            break;
        case 'null':
            result = null;
            break;
        default:
            result = String(value).valueOf();
    }

    return result;
}
