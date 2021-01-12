/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const newArr = str.split('-').map((word, index) => {
    if (index > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return word;
  });

  return newArr.join('');
}
