// Tabs
document.querySelectorAll('.home-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.home-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Clickable cards (projects + articles)
document.querySelectorAll('[data-url]').forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.url, '_blank');
  });
});
