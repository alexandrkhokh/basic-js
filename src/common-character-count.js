const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const a = [...s1].sort();
  const b = [...s2].sort();
  let i = 0, j = 0;
  let counter = 0;

  while (i < a.length && j < b.length){

    if(a[i] === b[j]){
      counter++;
      i++; j++;
    } else {
      (a[i] > b[j])? j++ : i++;
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
