/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let el = document.createElement("ul");

  el.innerHTML = [...friends].reduce((_html, person) => {
    return _html += `<li>${person.firstName} ${person.lastName}</li>`;
  }, '');

  return el;
}
