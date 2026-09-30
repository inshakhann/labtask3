// Small local demonstrations; no accounts, network requests or backend.
document.addEventListener('DOMContentLoaded', () => {
  const toast = new bootstrap.Toast(document.getElementById('demoToast'));
  document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault(); toast.show();
  }));
  document.querySelectorAll('.like-button').forEach(button => button.addEventListener('click', () => {
    const liked = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(liked));
    button.classList.toggle('text-primary', liked);
    button.textContent = liked ? '👍 Liked' : '👍 Like';
    const reactions = button.closest('.card').querySelector('.reactions');
    const count = [...reactions.childNodes].find(n => n.nodeType === Node.TEXT_NODE && /\d/.test(n.textContent));
    if (count) count.textContent = ' ' + (parseInt(count.textContent, 10) + (liked ? 1 : -1));
  }));
  document.getElementById('postForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('postText');
    if (!input.value.trim()) { input.value = ''; input.reportValidity(); return; }
    const card = document.createElement('article');
    card.className = 'card border-0 shadow-sm p-3';
    const author = document.createElement('strong'); author.textContent = 'Insha Khan';
    const meta = document.createElement('small'); meta.className = 'text-secondary'; meta.textContent = 'Just now · Demo post';
    const content = document.createElement('p'); content.className = 'post-text mb-0'; content.style.whiteSpace = 'pre-wrap'; content.textContent = input.value.trim();
    card.append(author, meta, content);
    const feed = document.getElementById('feed'); feed.querySelector('.card').after(card);
    bootstrap.Modal.getInstance(document.getElementById('postModal')).hide(); input.value = '';
  });
  document.getElementById('searchPosts').addEventListener('input', event => {
    const query = event.target.value.toLowerCase().trim();
    document.querySelectorAll('#feed .card').forEach(card => {
      if (card.querySelector('.post-text')) card.classList.toggle('d-none', !card.textContent.toLowerCase().includes(query));
    });
  });
});
