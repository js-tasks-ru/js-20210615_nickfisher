/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathArray = path.split('.');
    
    return obj => {
        let valueFromObject = obj;

        for (const node of pathArray) {
            if (valueFromObject === undefined) break;
    
            valueFromObject = valueFromObject[node]
        }

        return valueFromObject;
    }
}
