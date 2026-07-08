const openBtnEl = document.querySelector('[data-action="open"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  e.stopPropagation();
  burgerMenuEl.dataset.visible = 'open';
  document.body.dataset.menuOpen = 'true';
});

burgerMenuEl.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    burgerMenuEl.dataset.visible = 'close';
    delete document.body.dataset.menuOpen;
  }
});

document.addEventListener('click', e => {
  if (burgerMenuEl.dataset.visible === 'open') {
    if (!burgerMenuEl.contains(e.target) && !openBtnEl.contains(e.target)) {
      burgerMenuEl.dataset.visible = 'close';
      delete document.body.dataset.menuOpen;
    }
  }
});
