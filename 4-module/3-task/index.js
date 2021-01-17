/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let indexAge;
  let indexGender;
  let indexStatus;

  const assignIndex = () => {
    [...table.rows[0].cells].forEach((_heading, i) => {
      if (_heading.textContent === 'Age') {
        indexAge = i;
      } else if (_heading.textContent === 'Gender') {
        indexGender = i;
      } else if (_heading.textContent === 'Status') {
        indexStatus = i;
      }
    });
  };

  assignIndex();

  [...table.rows].forEach((row, i) => {

    if (indexStatus && row.cells[indexStatus].dataset.available) {
      switch (row.cells[indexStatus].dataset.available) {
        case 'true':
          row.classList.add('available');
          break;
        case 'false':
          row.classList.add('unavailable');
          break;
      }
    }

    if (i > 0 && indexStatus && !row.cells[indexStatus].dataset.available) {
      row.hidden = true;
    }

    if (indexGender) {
      switch (row.cells[indexGender].textContent) {
        case 'm':
          row.classList.add('male');
          break;
        case 'f':
          row.classList.add('female');
          break;
      }
    }

    if (indexAge && (parseInt(row.cells[indexAge].textContent)) < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
