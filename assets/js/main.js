// for Navigation, animations, interactions


// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('open');
  });
}
