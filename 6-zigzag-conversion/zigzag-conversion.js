/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    let rows = [];

    if (numRows == 1 || s.length <= numRows) {
        return s;
    }

    let currentRow = 0;
    let down = true;
    
    for (let i = 0; i < numRows; i++) {
        rows.push("");
    }

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        if (currentRow === numRows - 1) {
            down = false;
        } else if (currentRow === 0) {
            down = true;
        }

        currentRow += down ? 1 : -1;
    }
    
    return rows.join('');
}
