/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number, boolean}
 */
function sum(m, n) {
  if (Number.isFinite(m) && Number.isFinite(n)) {
    return m + n;
  }

  return false;
}

console.log(sum('test string', 33));
console.log(sum(33));
console.log(sum(33,));
console.log(sum(2.2, 3.1));
console.log(sum(2, 33));
console.log(sum(NaN, 33));
console.log(sum(-NaN, 3));
console.log(sum(23, 22));
console.log(sum(13, 2));
console.log(sum(Infinity, 22));
console.log(sum(-Infinity, 22));
console.log(sum(' === '));
