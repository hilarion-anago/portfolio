// Envoi du formulaire de contact vers Formspree, puis redirection vers merci.html
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const err = document.getElementById('form-error');
    err.style.display = 'none';
    btn.disabled = true; btn.textContent = 'Envoi en cours…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      window.location.href = 'merci.html';
    } catch (_) {
      err.style.display = 'block';
      btn.disabled = false; btn.textContent = 'Envoyer le message';
    }
  });
}
