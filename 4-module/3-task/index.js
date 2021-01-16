/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let indexAge;
  let indexGender;
  let indexStatus;

  [...table.rows[0].cells].forEach((_heading, i) => {
    if (_heading.textContent === 'Age') {
      indexAge = i;
    } else if (_heading.textContent === 'Gender') {
      indexGender = i;
    } else if (_heading.textContent === 'Status') {
      indexStatus = i;
    }
  });

  [...table.rows].forEach((_row, i) => {

    if (indexStatus && _row.cells[indexStatus].dataset.available) {
      switch (_row.cells[indexStatus].dataset.available) {
        case 'true':
          _row.classList.add('available');
          break;
        case 'false':
          _row.classList.add('unavailable');
          break;
      }
    }

    if (i > 0 && indexStatus && !_row.cells[indexStatus].dataset.available) {
      _row.hidden = true;
    }

    if (indexGender) {
      switch (_row.cells[indexGender].textContent) {
        case 'm':
          _row.classList.add('male');
          break;
        case 'f':
          _row.classList.add('female');
          break;
      }
    }

    if (indexAge && (parseInt(_row.cells[indexAge].textContent)) < 18) {
      _row.style.textDecoration = 'line-through';
    }
  });
}
