const characterCards = document.querySelectorAll('[data-character-card]');

characterCards.forEach(card => {
  let delayTimeout;

  card.addEventListener('click', () => {
    card.classList.add('is-active');

    clearTimeout(delayTimeout);

    delayTimeout = setTimeout(() => {
      card.classList.remove('is-active');
    }, 800);
  });
});
