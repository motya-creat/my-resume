document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('loading-page');
  const content = document.getElementById('app');

  setTimeout(() => {
    preloader.classList.add('hidden');
    content.hidden = false;
    console.log('Loading finished')
  }, 3500);
});