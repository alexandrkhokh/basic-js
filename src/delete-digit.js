const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('').map(Number);

  return arr.reduce( (acc, cur, index) => {
    const sum = arr.toSpliced(index, 1).join('');
    return (Number(sum) > acc) ? Number(sum) : acc;
  }, 0 )

}

module.exports = {
  deleteDigit
};
