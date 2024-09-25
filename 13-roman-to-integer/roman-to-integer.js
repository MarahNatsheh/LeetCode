/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals  = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum= 0;
    for (let i = 0; i < s.length; i++) {

        let currentValue = romanNumerals[s[i]];

        if (i < s.length - 1 && currentValue < romanNumerals[s[i + 1]]) {
            sum -= currentValue;
        } else {
            sum += currentValue;
        }
    }
    return sum;
};
