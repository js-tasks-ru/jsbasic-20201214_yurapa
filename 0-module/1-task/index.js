/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 * @throws Will throw an error if one of the arguments is not a number.
 */
function sum(m, n) {
  if (!Number.isFinite(m)) {
    throw new Error(` "m" is not a number!`);
  }

  if (!Number.isFinite(n)) {
    throw new Error(` "n" is not a number!`);
  }

  return m + n;
}
