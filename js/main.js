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
  const headerContainer = document.querySelector('.nav-container');
  const navActions = document.querySelector('.nav-actions');

  // Ensure backdrop overlay exists
  let navBackdrop = document.querySelector('.nav-backdrop-overlay');
  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop-overlay';
    document.body.appendChild(navBackdrop);
  }

  let scrollYPos = 0;
  const openMobileNav = () => {
    if (mainNav) {
      scrollYPos = window.pageYOffset || document.documentElement.scrollTop || 0;
      mainNav.classList.add('active');
      navBackdrop.classList.add('active');
      document.body.classList.add('mobile-nav-open');
      document.body.style.top = `-${scrollYPos}px`;
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  };

  const closeMobileNav = () => {
    if (mainNav) {
      mainNav.classList.remove('active');
      navBackdrop.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollYPos);
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }
  };

  // Keep in header on desktop (> 992px) and move to body on mobile (<= 992px)
  const mql = window.matchMedia('(max-width: 992px)');
  const syncNavPlacement = () => {
    if (!mainNav) return;
    if (mql.matches) {
      if (mainNav.parentNode !== document.body) {
        document.body.appendChild(mainNav);
      }
    } else {
      if (headerContainer && mainNav.parentNode !== headerContainer) {
        if (navActions && navActions.parentNode === headerContainer) {
          headerContainer.insertBefore(mainNav, navActions);
        } else {
          headerContainer.appendChild(mainNav);
        }
      }
      closeMobileNav();
    }
  };

  syncNavPlacement();
  if (mql.addEventListener) {
    mql.addEventListener('change', syncNavPlacement);
  } else if (mql.addListener) {
    mql.addListener(syncNavPlacement);
  }

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

  // 6. Enterprise Staggered Reveal Animations
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    const revealSelector = '.product-enterprise-card, .product-card, .trust-card, .value-card, .team-card, .routine-step-card, .step-card, .ingredient-photo-card, .social-hub-card, .tech-card, .faq-item, .hero-interactive-card, .hero-stats, .testimonial-card';
    document.querySelectorAll(revealSelector).forEach((el, idx) => {
      el.classList.add('reveal-item');
      el.style.setProperty('--reveal-delay', (idx % 4) * 80 + 'ms');
      revealObserver.observe(el);
    });
  }

  // 6.1 Enterprise Mobile Bottom Dock
  const initMobileDock = () => {
    if (document.querySelector('.mobile-bottom-dock')) return;
    const currentPath = window.location.pathname.toLowerCase();
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
    const isShop = currentPath.includes('tienda') || currentPath.includes('producto');

    const dock = document.createElement('nav');
    dock.className = 'mobile-bottom-dock';
    dock.setAttribute('aria-label', 'Navegación Rápida Móvil');
    dock.innerHTML = '<a href="index.html" class="dock-item ' + (isHome ? 'active' : '') + '">' +
      '<svg class="dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
      '<span>Inicio</span>' +
    '</a>' +
    '<a href="tienda.html" class="dock-item ' + (isShop ? 'active' : '') + '">' +
      '<svg class="dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' +
      '<span>Tienda</span>' +
    '</a>' +
    '<a href="https://wa.me/50499208330?text=Hola%20Golden%20Roast%2C%20quisiera%20hacer%20un%20pedido%20de%20sus%20productos." target="_blank" rel="noopener" class="dock-item dock-whatsapp" aria-label="WhatsApp Directo">' +
      '<svg class="dock-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.222-.553-1.822-.754-2.986-2.616-3.076-2.736-.089-.12-1.385-1.846-1.385-3.52 0-1.674.87-2.497 1.179-2.842.144-.162.38-.234.607-.234.195 0 .363.007.518.016.166.01.39-.063.607.458.228.549.778 1.902.847 2.042.068.14.114.305.023.487-.091.182-.136.295-.272.457-.136.163-.287.363-.41.488-.137.139-.28.29-.12.568.159.278.706 1.168 1.517 1.892 1.043.931 1.923 1.22 2.196 1.356.273.136.432.114.591-.068.159-.182.682-.796.864-1.069.182-.273.364-.227.614-.136.25.091 1.591.751 1.864.887.273.136.455.205.523.319.068.114.068.659-.076 1.064z"/></svg>' +
      '<span>WhatsApp</span>' +
    '</a>' +
    '<button type="button" class="dock-item dock-cart btn-cart-nav" aria-label="Abrir Bolsa de Compras">' +
      '<div class="dock-cart-badge-wrap">' +
        '<svg class="dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>' +
        '<span class="cart-badge">0</span>' +
      '</div>' +
      '<span>Bolsa</span>' +
    '</button>';
    document.body.appendChild(dock);

    if (window.cartManager && typeof window.cartManager.updateBadges === 'function') {
      window.cartManager.updateBadges();
    }
  };

  initMobileDock();

  // 6.2 Precision QR Copy Link Handler
  document.querySelectorAll('[data-copy-link]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const link = btn.getAttribute('data-copy-link');
      if (link && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(link);
          const labelSpan = btn.querySelector('span');
          const origText = labelSpan ? labelSpan.textContent : 'Copiar';
          if (labelSpan) labelSpan.textContent = '¡Copiado!';
          btn.style.borderColor = '#10B981';
          btn.style.color = '#10B981';
          if (window.cartManager && typeof window.cartManager.showToast === 'function') {
            window.cartManager.showToast('Enlace copiado al portapapeles');
          }
          setTimeout(() => {
            if (labelSpan) labelSpan.textContent = origText;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        } catch (err) {
          console.error(err);
        }
      }
    });
  });


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
