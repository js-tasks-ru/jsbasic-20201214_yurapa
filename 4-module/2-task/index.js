/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  [...table.rows].forEach((item, i) => {
    if (item.cells[i]) {
      item.cells[i].style.backgroundColor = 'red';
    }
  });
}
