document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = form.elements['user_email'].value.trim();
    if (!validateEmail(email)) {
      alert('Zadej platný e-mail.');
      return;
    }

    emailjs.sendForm('010103', 'template_0awr99h', this)
      .then(() => {
        alert('Zpráva byla úspěšně odeslána. Děkuji!');
        form.reset();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Odeslání selhalo. Zkuste to prosím znovu.');
      });
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
