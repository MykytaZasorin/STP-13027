const openBtnEl = document.querySelector('[data-action="open"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  e.stopPropagation();
  burgerMenuEl.dataset.visible = 'open';
});

document.addEventListener('click', e => {
  if (burgerMenuEl.dataset.visible === 'open') {
    if (!burgerMenuEl.contains(e.target) && !openBtnEl.contains(e.target)) {
      burgerMenuEl.dataset.visible = 'close';
    }
  }
});
