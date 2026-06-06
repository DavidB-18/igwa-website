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

//Read full bio button 
function toggleBio(button) {
  const bio = button.previousElementSibling;

  bio.classList.toggle('expanded');

  if (bio.classList.contains('expanded')) {
    button.textContent = 'See Less';
  } else {
    button.textContent = 'Read Full Bio';
  }
}
// AOS initialisation 
AOS.init({
  duration: 700,    // how long each animation takes in ms
  once: true,       // animation only happens once not every scroll
  offset: 20        // how many px from bottom of screen before it triggers
});