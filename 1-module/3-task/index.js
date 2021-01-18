/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let result = '';

  if (str && str.length > 0) {
    result = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return result;
}
