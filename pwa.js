'use strict';

(() => {
  const section = document.getElementById('install-section');
  const button = document.getElementById('install-app');
  const status = document.getElementById('install-status');
  const secureHosting = location.protocol === 'https:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const standalone = window.matchMedia('(display-mode: standalone)');
  let installed = standalone.matches || navigator.standalone === true;
  let installPrompt = null;

  function renderInstall() {
    section.hidden = !secureHosting || installed;
    button.hidden = !installPrompt || installed;
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    renderInstall();
  });

  window.addEventListener('appinstalled', () => {
    installed = true;
    installPrompt = null;
    renderInstall();
  });

  standalone.addEventListener('change', event => {
    installed = event.matches || navigator.standalone === true;
    renderInstall();
  });

  button.addEventListener('click', async () => {
    if (!installPrompt) return;
    const prompt = installPrompt;
    installPrompt = null;
    button.disabled = true;
    status.textContent = '';
    try {
      await prompt.prompt();
      const choice = await prompt.userChoice;
      status.textContent = choice.outcome === 'accepted'
        ? 'Instalação solicitada. Siga a confirmação do seu navegador.'
        : 'Você pode instalar depois pelo menu do navegador.';
    } catch {
      status.textContent = 'Use o menu do navegador para adicionar o aplicativo à tela inicial.';
    } finally {
      button.disabled = false;
      renderInstall();
    }
  });

  renderInstall();

  if (secureHosting && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
        .catch(error => console.warn('O modo offline não pôde ser ativado:', error));
    }, { once: true });
  }
})();
