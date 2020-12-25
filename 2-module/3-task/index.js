let calculator = {
  value1: null,
  value2: null,

  read(a, b) {
    this.value1 = a;
    this.value2 = b;
  },

  sum() {
    return this.value1 + this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
