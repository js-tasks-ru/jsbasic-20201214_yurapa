/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let indexAge;
  let indexGender;
  let indexStatus;

  [indexAge, indexGender, indexStatus] = findColumnIndexes(table, indexAge, indexGender, indexStatus);

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

function findColumnIndexes(table, indexAge, indexGender, indexStatus) {
  [...table.rows[0].cells].forEach((heading, i) => {
    if (heading.textContent === 'Age') {
      indexAge = i;
    } else if (heading.textContent === 'Gender') {
      indexGender = i;
    } else if (heading.textContent === 'Status') {
      indexStatus = i;
    }
  });

  return [indexAge, indexGender, indexStatus];
}
