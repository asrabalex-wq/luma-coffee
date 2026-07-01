// Hamburger Menu Toggle
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

if (navbarToggle) {
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const links = navbarLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar-section')) {
      navbarToggle.classList.remove('active');
      navbarLinks.classList.remove('active');
    }
  });
}

// Smooth scroll for navigation links (already in HTML with smooth scroll behavior)
// Additional smooth scroll functionality if needed can be added here
