const mobileMenu = document.querySelector('.mobile-nav');
const siteHeader = document.querySelector('.site-header');

if (mobileMenu) {
  mobileMenu.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.open = false;
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      mobileMenu.open = false;
    }
  });
}

if (siteHeader) {
  let scrollFramePending = false;
  const updateHeader = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 16);
    scrollFramePending = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollFramePending) {
      scrollFramePending = true;
      window.requestAnimationFrame(updateHeader);
    }
  }, { passive: true });

  updateHeader();
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight * 0.9) {
      element.classList.add('is-visible');
    }
    element.classList.add('reveal-ready');
    revealObserver.observe(element);
  });
}
