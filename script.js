// Scroll reveal using IntersectionObserver
function handleScrollReveal() {
  const reveals = document.querySelectorAll(
    '.section, .timeline-item, .project-card, .skill-card'
  );
  const options = {
    threshold: 0.1,
  };
  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(revealOnScroll, options);
  reveals.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Hamburger menu functionality
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
  });
}

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  handleScrollReveal();
  initHamburger();
});