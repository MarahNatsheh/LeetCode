/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
   if (word1.length !== word2.length) {
    return false;
  }

  let rep1 = new Map();
  let rep2 = new Map();

  for (let char of word1) {
    rep1.set(char, (rep1.get(char) || 0) + 1);
  }

  for (let char of word2) {
    rep2.set(char, (rep2.get(char) || 0) + 1);
  }

  const chars1 = [...rep1.keys()].sort().join('');
  const chars2 = [...rep2.keys()].sort().join('');
  if (chars1 !== chars2) {
    return false;
  }

  const values1 = [...rep1.values()].sort((a, b) => a - b);
  const values2 = [...rep2.values()].sort((a, b) => a - b);
  return values1.join('') === values2.join('');

};