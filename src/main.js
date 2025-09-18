import "./style.css"

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('app');

  setTimeout(() => {
      preloader.classList.add('hidden');
      content.hidden = false;
  }, 2500);
});