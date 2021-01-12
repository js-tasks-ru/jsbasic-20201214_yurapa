/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
const SPACE_OR_COMMA_RE = /[ ,]+/;

function getMinMax(str) {
  let arr = str.split(SPACE_OR_COMMA_RE).filter(item => isFinite(item));

  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}
