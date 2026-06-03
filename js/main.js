const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu open/close
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});