function hideSelf() {
  const el = document.querySelector('.hide-self-button');

  el.addEventListener('click', (event) => {
    event.target.hidden = true;
  });
}
