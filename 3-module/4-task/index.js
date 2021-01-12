/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} maxAge - максимальный возраст
 * @returns {string}
 */
function showSalary(users, maxAge) {

  return users.filter(({age}) => age <= maxAge)
              .map(({name, balance}) => `${name}, ${balance}`)
              .join('\n');
}
