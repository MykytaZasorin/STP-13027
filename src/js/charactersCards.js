const characterCards = document.querySelectorAll('[data-character-card]');

characterCards.forEach(card => {
  let delayTimeout;

  card.addEventListener('click', () => {
    card.setAttribute('data-character-card', 'active');

    clearTimeout(delayTimeout);

    delayTimeout = setTimeout(() => {
      card.setAttribute('data-character-card', '');
    }, 800);
  });
});
