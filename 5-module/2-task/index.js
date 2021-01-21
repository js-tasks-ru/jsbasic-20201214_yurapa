function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const target = document.getElementById('text');

  btn.addEventListener('click', () => {
    target.hidden = !target.hidden;
  });
}
