/* ============================================
   BIANCOLOR - Animaciones y efectos
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initNavbarScroll();
  initSmoothScroll();
});

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- Navbar Scroll Effect ---------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/* ---------- Utility: Stagger animations ---------- */
function staggerAnimation(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
  });
}
