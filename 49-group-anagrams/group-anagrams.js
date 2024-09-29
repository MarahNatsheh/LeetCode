/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 const map = {};

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');

        if (!map[sortedWord]) {
            map[sortedWord] = [];
        }
        map[sortedWord].push(word);
    }

    return Object.values(map);
};;