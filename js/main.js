/**
 * Golden Roast - Core UI & Interaction Controller
 * Handles Preloader, IntersectionObserver Animations, Mobile Navigation,
 * Tabs, FAQ accordions, and Forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dismiss Brand Preloader with subtle fade out
  const preloader = document.getElementById('sitePreloader');
  if (preloader) {
    const hidePreloader = () => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, 500);
    };

    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 350);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 350));
      setTimeout(hidePreloader, 1200); // safety fallback
    }
  }

  // 2. Mobile Navigation & Enterprise Off-Canvas Sidebar Controller
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  // Move drawer to document.body on mobile to break out of any header stacking contexts
  if (mainNav && mainNav.parentNode !== document.body) {
    document.body.appendChild(mainNav);
  }
  
  // Ensure backdrop overlay exists
  let navBackdrop = document.querySelector('.nav-backdrop-overlay');
  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop-overlay';
    document.body.appendChild(navBackdrop);
  }

  const openMobileNav = () => {
    if (mainNav) {
      mainNav.classList.add('active');
      navBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  };

  const closeMobileNav = () => {
    if (mainNav) {
      mainNav.classList.remove('active');
      navBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mainNav && mainNav.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // Mobile Navigation Close Events (Rock-solid Click, Touch & Outside dismissal)
  const mobileCloseBtn = document.getElementById('mobileNavClose');
  if (mobileCloseBtn) {
    const handleClose = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      closeMobileNav();
    };
    mobileCloseBtn.addEventListener('click', handleClose);
    mobileCloseBtn.addEventListener('touchend', handleClose, { passive: false });
  }

  const handleBackdropClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    closeMobileNav();
  };
  navBackdrop.addEventListener('click', handleBackdropClose);
  navBackdrop.addEventListener('touchend', handleBackdropClose, { passive: false });

  // Click / touch outside to close drawer
  document.addEventListener('click', (e) => {
    if (mainNav && mainNav.classList.contains('active')) {
      if (!mainNav.contains(e.target) && (!mobileToggle || !mobileToggle.contains(e.target))) {
        closeMobileNav();
      }
    }
  });

  // Close when clicking any nav link
  if (mainNav) {
    mainNav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          closeMobileNav();
        }
      });
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Sticky header blur elevation on scroll
  const headerEl = document.querySelector('.main-header');
  if (headerEl) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Quantity Pickers (+ / -)
  document.querySelectorAll('.quantity-picker').forEach(picker => {
    const decBtn = picker.querySelector('.btn-qty-dec');
    const incBtn = picker.querySelector('.btn-qty-inc');
    const input = picker.querySelector('.qty-input');

    if (decBtn && incBtn && input) {
      decBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val > 1) {
          input.value = val - 1;
        }
      });

      incBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val < 20) {
          input.value = val + 1;
        }
      });
    }
  });

  // 4. Tabs System for Product & Academic Details
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      const container = btn.closest('.tabs-container');
      if (!container) return;

      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 5. FAQ Accordion (Universal Mobile & Desktop Support)
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active') || item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active', 'open');
        });
        if (!isOpen) {
          item.classList.add('active', 'open');
        }
      });
    }
  });

  // 6. IntersectionObserver Reveal Animations (Performance-first)
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.product-card, .step-card, .value-card, .team-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });

    // Custom CSS class listener for revealed elements
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .is-revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(styleSheet);
  }

  // 7. Newsletter Subscription Simulation
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const lang = window.i18n ? window.i18n.currentLang : 'en';
        const msg = lang === 'es' ? '¡Gracias por unirte al boletín de Golden Roast!' : 'Thank you for subscribing to Golden Roast updates!';
        if (window.cartManager) {
          window.cartManager.showToast(msg);
        } else {
          alert(msg);
        }
        emailInput.value = '';
      }
    });
  }

  // 8. Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('contactFeedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.scrollIntoView({ behavior: 'smooth' });
      }
      contactForm.reset();
      const lang = window.i18n ? window.i18n.currentLang : 'en';
      const msg = lang === 'es' ? 'Mensaje enviado. Te responderemos pronto.' : 'Message sent. Our team will contact you soon.';
      if (window.cartManager) {
        window.cartManager.showToast(msg);
      }
    });
  }

  // Interactive Background Cursor Spotlight (Desktop Mouse Only - Zero Mobile Overhead)
  const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 992;
  if (isDesktopPointer) {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-interactive-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;
    let animId = null;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        cursorGlow.style.opacity = '1';
        isMoving = true;
        if (!animId) animId = requestAnimationFrame(renderCursorMesh);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
      isMoving = false;
    });

    function renderCursorMesh() {
      if (!isMoving) {
        animId = null;
        return;
      }
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      cursorGlow.style.transform = 'translate3d(' + (currentX - 240) + 'px, ' + (currentY - 240) + 'px, 0)';
      animId = requestAnimationFrame(renderCursorMesh);
    }
  }

});
