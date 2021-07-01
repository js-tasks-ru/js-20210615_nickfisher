/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === 0) {
      return '';
    }

    if (size === undefined) {
      return string;
    }

    const resultArray = [];
    let symbolArray = string.split(''),
    counter = 0,
    previousSymbol;


    for (const symbol of symbolArray) {
        if (previousSymbol === symbol) {
          if (counter < size) {
            counter++;
            resultArray.push(symbol);
          }
        } else {
          previousSymbol = symbol;
          counter = 1;
          resultArray.push(symbol);
        }
      }
      
    return resultArray.join('');
}
