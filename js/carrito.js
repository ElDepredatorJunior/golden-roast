/**
 * Golden Roast - Enhanced Cart Manager with Centralized Storage & i18n
 * Version: 2.0.0
 */

const GOLDEN_ROAST_PRODUCTS = {
  'exfoliante': {
    id: 'exfoliante',
    name: 'Coffee Exfoliant',
    name_es: 'Exfoliante de Café',
    subtitle: 'The Golden Touch - Gentle Renewal',
    subtitle_es: 'The Golden Touch - Exfoliación Suave',
    price: 180.00,
    priceUsd: 7.50,
    category: 'Exfoliation',
    category_es: 'Exfoliación',
    image: 'assets/img/producto-exfoliante.png',
    url: 'producto-exfoliante.html',
    summary: 'Granular mechanical exfoliant combining roasted coffee, sugar, pure honey, and virgin coconut oil.',
    summary_es: 'Fórmula granulada para renovar la superficie cutánea, remover células muertas y aportar suavidad.'
  },
  'hidratante': {
    id: 'hidratante',
    name: 'Honey Moisturizer',
    name_es: 'Crema Hidratante de Miel',
    subtitle: 'The Golden Touch - Deep Hydration',
    subtitle_es: 'The Golden Touch - Nutrición & Calma',
    price: 200.00,
    priceUsd: 8.50,
    category: 'Hydration',
    category_es: 'Hidratación',
    image: 'assets/img/producto-hidratante.png',
    url: 'producto-hidratante.html',
    summary: 'Deeply humectant and emollient cream with pure honey (2 tbsp), aloe vera (4 tbsp), glycerin and coconut.',
    summary_es: 'Emulsión humectante y emoliente rica en nutrientes naturales para mantener la piel flexible y radiante.'
  },
  'elixir': {
    id: 'elixir',
    name: 'Glow Botanical Elixir',
    name_es: 'Elixir Botánico Iluminador',
    subtitle: 'Golden Coffee & Honey Infusion',
    subtitle_es: 'Infusión de Café y Miel',
    price: 240.00,
    priceUsd: 10.00,
    category: 'Elixir',
    category_es: 'Tratamiento',
    image: 'assets/img/producto-elixir.png',
    url: 'tienda.html',
    summary: 'Potent antioxidant serum drops with cold-pressed green coffee oil and pure royal honey essence.',
    summary_es: 'Gotas concentradas antioxidantes con aceite de café verde y néctar de miel para un resplandor dorado.'
  },
  'travel-kit': {
    id: 'travel-kit',
    name: 'Travel & Gift Collection',
    name_es: 'Colección de Viaje & Regalo',
    subtitle: 'Mini Duo + Wooden Spoon',
    subtitle_es: 'Mini Dúo + Cuchara Aplicadora',
    price: 260.00,
    priceUsd: 11.00,
    category: 'Gift Sets',
    category_es: 'Sets & Regalos',
    image: 'assets/img/producto-travel-kit.png',
    url: 'tienda.html',
    summary: 'Miniature luxury jars of coffee scrub and honey moisturizer in an embossed gift box.',
    summary_es: 'Edición especial para viaje con miniaturas de exfoliante e hidratante en caja rígida artesanal.'
  },
  'cleanser': {
    id: 'cleanser',
    name: 'Gentle Coffee Cleansing Gel',
    name_es: 'Gel Limpiador Suave de Café',
    subtitle: 'Daily Refresh & Balance',
    subtitle_es: 'Limpieza Diaria & Equilibrio',
    price: 190.00,
    priceUsd: 8.00,
    category: 'Cleanser',
    category_es: 'Limpieza',
    image: 'assets/img/producto-cleanser.png',
    url: 'tienda.html',
    summary: 'Ultra-mild morning cleanser infused with antioxidant coffee extract and plant-based foam.',
    summary_es: 'Gel limpiador espumoso con extracto de café para purificar los poros sin alterar el manto ácido.'
  },
  'pack-duo': {
    id: 'pack-duo',
    name: 'Golden Duo Routine Set',
    name_es: 'Pack Golden Dúo (Rutina Completa)',
    subtitle: 'Coffee Exfoliant + Honey Moisturizer',
    subtitle_es: 'Exfoliante Café + Hidratante Miel',
    price: 350.00,
    priceUsd: 15.00,
    originalPrice: 380.00,
    category: 'Routine Sets',
    category_es: 'Packs & Rutinas',
    image: 'assets/img/producto-pack.png',
    url: 'tienda.html',
    summary: 'The essential duo: prior mechanical exfoliation followed by deep hydration with honey and aloe.',
    summary_es: 'Ahorra con el dúo esencial de Golden Roast. La combinación ideal para tu rutina semanal de cuidado.'
  }
};

const FREE_SHIPPING_THRESHOLD = 300.00;

class CartManager {
  constructor() {
    this.storage = window.goldenStorage;
    this.cart = this.storage ? this.storage.getCart() : [];
    this.initDrawer();
    this.updateBadges();
    this.renderCartPage();

    // Listen to sync events from other tabs
    window.addEventListener('golden_storage_sync', (e) => {
      if (e.detail && e.detail.key === 'cart') {
        this.cart = this.storage.getCart();
        this.updateBadges();
        this.renderDrawer();
        this.renderCartPage();
      }
    });

    // Listen to language changes
    window.addEventListener('golden_lang_changed', () => {
      this.renderDrawer();
      this.renderCartPage();
    });
  }

  saveCart() {
    if (this.storage) {
      this.storage.setCart(this.cart);
    }
    this.updateBadges();
    this.renderDrawer();
    this.renderCartPage();
    window.dispatchEvent(new CustomEvent('golden_cart_updated', { detail: { cart: this.cart } }));
  }

  addItem(productId, quantity = 1) {
    const product = GOLDEN_ROAST_PRODUCTS[productId];
    if (!product) {
      console.error('Product not found:', productId);
      return;
    }

    const cleanQty = Math.max(1, Math.min(99, Math.floor(Number(quantity)) || 1));
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const prodName = lang === 'es' ? (product.name_es || product.name) : product.name;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity = Math.min(99, Math.max(1, (Math.floor(Number(this.cart[existingIndex].quantity)) || 1) + cleanQty));
      this.cart[existingIndex].price = product.price; // Enforce canonical catalog price
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        name_es: product.name_es,
        price: product.price,
        image: product.image,
        url: product.url,
        quantity: cleanQty
      });
    }

    this.saveCart();
    const toastMsg = lang === 'es' ? `¡${prodName} añadido al carrito!` : `Added ${prodName} to your bag!`;
    this.showToast(toastMsg);
    this.openDrawer();
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;

    const cleanDelta = Math.floor(Number(delta)) || 0;
    const curQty = Math.floor(Number(item.quantity)) || 1;
    const newQty = curQty + cleanDelta;

    if (newQty <= 0) {
      this.removeItem(productId);
    } else {
      item.quantity = Math.min(99, newQty);
      if (typeof GOLDEN_ROAST_PRODUCTS !== 'undefined' && GOLDEN_ROAST_PRODUCTS[item.id]) {
        item.price = GOLDEN_ROAST_PRODUCTS[item.id].price;
      }
      this.saveCart();
    }
  }

  removeItem(productId) {
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const item = this.cart.find(i => i.id === productId);
    const itemName = item ? (lang === 'es' ? (item.name_es || item.name) : item.name) : 'Product';
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    const msg = lang === 'es' ? `${itemName} eliminado del carrito.` : `${itemName} removed from bag.`;
    this.showToast(msg);
  }

  clear() {
    this.cart = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateBadges() {
    const count = this.getTotalCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
    });
  }


  requireAuth(targetUrl = 'checkout.html') {
    const user = this.storage ? this.storage.getUser() : null;
    if (user) {
      return true;
    }
    this.openAuthGateModal(targetUrl);
    return false;
  }

  openAuthGateModal(targetUrl = 'checkout.html') {
    let modal = document.getElementById('authGateModal');
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'authGateModal';
      modal.className = 'auth-gate-modal-overlay';
      modal.innerHTML = `
        <div class="auth-gate-card">
          <div class="auth-gate-icon-badge">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3 class="auth-gate-title" id="authGateTitle">Account Required</h3>
          <p class="auth-gate-desc" id="authGateDesc">
            To ensure secure order tracking and confirm campus deliveries in Comayagua, please sign in or register an account before purchasing.
          </p>
          <div class="auth-gate-actions">
            <a href="cuenta.html" class="btn btn-primary" id="authGateBtnLogin">Sign In or Register</a>
            <button type="button" class="btn btn-outline" id="authGateBtnCancel">Continue Browsing</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('#authGateBtnCancel').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => { modal.style.display = 'none'; }, 250);
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          setTimeout(() => { modal.style.display = 'none'; }, 250);
        }
      });
    }

    // Dynamic language updates
    const titleEl = modal.querySelector('#authGateTitle');
    const descEl = modal.querySelector('#authGateDesc');
    const btnLogin = modal.querySelector('#authGateBtnLogin');
    const btnCancel = modal.querySelector('#authGateBtnCancel');

    if (lang === 'es') {
      titleEl.textContent = 'Registro de Cuenta Requerido';
      descEl.textContent = 'Para garantizar la trazabilidad de tus pedidos y coordinar la entrega en Comayagua, debes iniciar sesión o registrar tu cuenta antes de comprar.';
      btnLogin.textContent = 'Iniciar Sesión / Registrarme';
      btnCancel.textContent = 'Continuar Explorando';
    } else {
      titleEl.textContent = 'Account Required';
      descEl.textContent = 'To ensure secure order tracking and confirm campus deliveries in Comayagua, please sign in or register an account before purchasing.';
      btnLogin.textContent = 'Sign In or Register';
      btnCancel.textContent = 'Continue Browsing';
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
  }

  initDrawer() {
    if (document.getElementById('cartDrawerOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cartDrawerOverlay';
    overlay.className = 'cart-drawer-overlay';

    const drawer = document.createElement('div');
    drawer.id = 'cartDrawer';
    drawer.className = 'cart-drawer';
    drawer.innerHTML = `
      <div class="cart-drawer-header">
        <h3 class="cart-drawer-title" id="drawerTitle">Your Shopping Bag</h3>
        <button class="btn-close-drawer" id="btnCloseDrawer" aria-label="Close bag">&times;</button>
      </div>
      <div class="cart-free-shipping-bar" id="drawerShippingBar">
        <div id="drawerShippingText">Add L 300 for Free Delivery on campus!</div>
        <div class="shipping-progress">
          <div class="shipping-progress-fill" id="drawerShippingProgress"></div>
        </div>
      </div>
      <div class="cart-drawer-items" id="drawerItemsContainer"></div>
      <div class="cart-drawer-footer" id="drawerFooter">
        <div class="cart-subtotal-row">
          <span id="drawerSubtotalLabel">Estimated Subtotal:</span>
          <span id="drawerSubtotalAmount">L 0.00</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <a href="checkout.html" class="btn btn-primary btn-block" id="drawerBtnCheckout">Proceed to Checkout</a>
          <a href="carrito.html" class="btn btn-outline btn-block btn-sm" id="drawerBtnViewBag">View Full Bag</a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // Toast Container
    if (!document.getElementById('toastContainer')) {
      const toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    overlay.addEventListener('click', () => this.closeDrawer());
    drawer.querySelector('#btnCloseDrawer').addEventListener('click', () => this.closeDrawer());

    const drawerCheckout = drawer.querySelector('#drawerBtnCheckout');
    if (drawerCheckout) {
      drawerCheckout.addEventListener('click', (e) => {
        if (!this.requireAuth('checkout.html')) {
          e.preventDefault();
          this.closeDrawer();
        }
      });
    }

    document.querySelectorAll('.btn-cart-nav, [data-trigger="open-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    this.renderDrawer();
  }

  openDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    const drawer = document.getElementById('cartDrawer');
    if (overlay && drawer) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.renderDrawer();
    }
  }

  closeDrawer() {
    const overlay = document.getElementById('cartDrawerOverlay');
    const drawer = document.getElementById('cartDrawer');
    if (overlay && drawer) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  renderDrawer() {
    const container = document.getElementById('drawerItemsContainer');
    const footer = document.getElementById('drawerFooter');
    const shippingBar = document.getElementById('drawerShippingBar');
    const shippingText = document.getElementById('drawerShippingText');
    const shippingProgress = document.getElementById('drawerShippingProgress');
    const subtotalEl = document.getElementById('drawerSubtotalAmount');
    const titleEl = document.getElementById('drawerTitle');
    const subtotalLabel = document.getElementById('drawerSubtotalLabel');
    const btnCheckout = document.getElementById('drawerBtnCheckout');
    const btnViewBag = document.getElementById('drawerBtnViewBag');

    if (!container) return;

    const lang = window.i18n ? window.i18n.currentLang : 'en';

    // Update labels based on lang
    if (titleEl) titleEl.textContent = lang === 'es' ? 'Tu Carrito de Compra' : 'Your Shopping Bag';
    if (subtotalLabel) subtotalLabel.textContent = lang === 'es' ? 'Subtotal estimado:' : 'Estimated Subtotal:';
    if (btnCheckout) btnCheckout.textContent = lang === 'es' ? 'Proceder al Pago' : 'Proceed to Checkout';
    if (btnViewBag) btnViewBag.textContent = lang === 'es' ? 'Ver Carrito Completo' : 'View Full Bag';

    const subtotal = this.getSubtotal();

    // Free shipping bar logic
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingText.innerHTML = lang === 'es' 
        ? `<strong>¡Felicidades!</strong> Calificas para <em>Envío Gratis</em> en el campus`
        : `<strong>Congratulations!</strong> You qualify for <em>Free Delivery</em> on campus`;
      shippingProgress.style.width = '100%';
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
      const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingText.innerHTML = lang === 'es'
        ? `Agrega <strong>L ${remaining}</strong> más para <strong>Envío Gratis</strong>`
        : `Add <strong>L ${remaining}</strong> more for <strong>Free Delivery</strong>`;
      shippingProgress.style.width = `${percent}%`;
    }

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem;">
          <svg style="width: 52px; height: 52px; stroke: var(--text-light); margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h4 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--coffee-deep);">
            ${lang === 'es' ? 'Tu carrito está vacío' : 'Your bag is empty'}
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            ${lang === 'es' ? 'Descubre el toque dorado de la naturaleza con nuestros productos de café y miel.' : 'Discover the golden touch of nature with our coffee and honey skincare prototypes.'}
          </p>
          <a href="tienda.html" class="btn btn-secondary btn-sm" onclick="window.cartManager.closeDrawer()">
            ${lang === 'es' ? 'Explorar Tienda' : 'Explore Shop'}
          </a>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      if (shippingBar) shippingBar.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'block';
    if (shippingBar) shippingBar.style.display = 'block';

    container.innerHTML = this.cart.map(item => {
      const displayName = lang === 'es' ? (item.name_es || item.name) : item.name;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${displayName}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 style="font-size: 0.925rem; font-weight: 600; color: var(--coffee-deep); margin-bottom: 0.2rem;">${displayName}</h4>
            <div style="font-size: 0.875rem; font-weight: 700; color: var(--gold-hover);">L ${(item.price * item.quantity).toFixed(2)}</div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-top: 0.45rem;">
              <div style="display: inline-flex; align-items: center; border: 1px solid var(--surface-border); border-radius: var(--radius-full); padding: 0.15rem 0.35rem; background: #FFFFFF;">
                <button style="border: none; background: none; width: 24px; height: 24px; cursor: pointer; font-size: 0.9rem;" onclick="window.cartManager.updateQuantity('${item.id}', -1)">-</button>
                <span style="width: 28px; text-align: center; font-size: 0.85rem; font-weight: 700;">${item.quantity}</span>
                <button style="border: none; background: none; width: 24px; height: 24px; cursor: pointer; font-size: 0.9rem;" onclick="window.cartManager.updateQuantity('${item.id}', 1)">+</button>
              </div>
              <button style="background: none; border: none; color: var(--text-light); cursor: pointer; padding: 0.25rem;" onclick="window.cartManager.removeItem('${item.id}')" title="Remove">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (subtotalEl) {
      subtotalEl.textContent = `L ${subtotal.toFixed(2)}`;
    }
  }


  renderCartPage() {
    const tableBody = document.getElementById('cartTableBody');
    const emptyNotice = document.getElementById('cartEmptyNotice');
    const tableWrapper = document.getElementById('cartTableWrapper');
    const subtotalEl = document.getElementById('summarySubtotal');
    const deliveryEl = document.getElementById('summaryDelivery');
    const deliveryBar = document.getElementById('deliveryProgressBar');
    const deliveryText = document.getElementById('deliveryProgressText');
    const discountRow = document.getElementById('summaryDiscountRow');
    const discountEl = document.getElementById('summaryDiscount');
    const totalEl = document.getElementById('summaryTotal');

    if (!tableBody) return;

    const lang = window.i18n ? window.i18n.currentLang : 'en';

    if (!this.cart || this.cart.length === 0) {
      if (tableWrapper) tableWrapper.style.display = 'none';
      if (emptyNotice) emptyNotice.style.display = 'block';
      if (subtotalEl) subtotalEl.textContent = 'L 0.00';
      if (deliveryEl) deliveryEl.textContent = 'L 0.00';
      if (deliveryBar) deliveryBar.style.width = '0%';
      if (discountRow) discountRow.style.display = 'none';
      if (totalEl) totalEl.textContent = 'L 0.00';
      return;
    }

    if (tableWrapper) tableWrapper.style.display = 'block';
    if (emptyNotice) emptyNotice.style.display = 'none';

    tableBody.innerHTML = '';

    this.cart.forEach(item => {
      const displayName = lang === 'es' ? (item.name_es || item.name) : item.name;
      const itemSubtotal = (Number(item.price) * Number(item.quantity)).toFixed(2);

      const tr = document.createElement('tr');
      tr.className = 'cart-table-row';
      tr.innerHTML = `
        <td class="cart-td-product">
          <div class="cart-product-cell">
            <img src="${item.image}" alt="${displayName}" class="cart-cell-thumb">
            <div class="cart-cell-meta">
              <div class="cart-cell-title">${displayName}</div>
              <div class="cart-cell-sub">${item.category || 'Cosmética Natural'}</div>
            </div>
          </div>
        </td>
        <td class="cart-td-price">L ${Number(item.price).toFixed(2)}</td>
        <td class="cart-td-qty">
          <div class="cart-qty-inline">
            <button type="button" class="btn-cell-qty" onclick="window.cartManager.updateQuantity('${item.id}', -1)">-</button>
            <span class="cell-qty-num">${item.quantity}</span>
            <button type="button" class="btn-cell-qty" onclick="window.cartManager.updateQuantity('${item.id}', 1)">+</button>
          </div>
        </td>
        <td class="cart-td-subtotal">L ${itemSubtotal}</td>
        <td class="cart-td-remove">
          <button type="button" class="btn-cell-remove" onclick="window.cartManager.removeItem('${item.id}')" title="Eliminar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    const totals = this.storage ? this.storage.calculateTotals() : { subtotal: this.getSubtotal(), discount: 0, delivery: (this.getSubtotal() >= 300 ? 0 : 40), total: 0 };
    if (subtotalEl) subtotalEl.textContent = `L ${totals.subtotal.toFixed(2)}`;
    if (deliveryEl) deliveryEl.textContent = totals.delivery === 0 ? (lang === 'es' ? '¡Gratis!' : 'Free!') : `L ${totals.delivery.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `L ${totals.total.toFixed(2)}`;
    
    if (discountRow && discountEl) {
      if (totals.discount > 0) {
        discountRow.style.display = 'flex';
        const labelSpan = discountRow.querySelector('span:first-child');
        if (labelSpan) {
          const pct = totals.couponPercent || 10;
          labelSpan.textContent = lang === 'es' ? `Descuento (${pct}%):` : `Discount (${pct}%):`;
        }
        discountEl.textContent = `-L ${totals.discount.toFixed(2)}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (deliveryBar) {
      const pct = Math.min(100, Math.round((totals.subtotal / 300) * 100));
      deliveryBar.style.width = pct + '%';
      if (deliveryText) {
        if (totals.subtotal >= 300) {
          deliveryText.textContent = lang === 'es' ? '🎉 ¡Calificas para entrega gratis en Comayagua!' : '🎉 You unlocked free campus delivery in Comayagua!';
        } else {
          const diff = (300 - totals.subtotal).toFixed(2);
          deliveryText.textContent = lang === 'es' ? `Añade L ${diff} más para envío gratis` : `Add L ${diff} more for free delivery`;
        }
      }
    }

    const btnCoupon = document.getElementById('btnApplyCoupon');
    const couponInput = document.getElementById('couponInput');
    const couponFeedback = document.getElementById('couponFeedback');
    if (btnCoupon && couponInput && !btnCoupon._initialized) {
      btnCoupon._initialized = true;
      btnCoupon.addEventListener('click', (e) => {
        e.preventDefault();
        const code = couponInput.value.trim().toUpperCase();
        const percent = this.storage ? this.storage.getCouponDiscountPercent(code) : (code === 'GOLDEN10' ? 10 : 0);
        if (percent > 0) {
          if (this.storage) this.storage.set('coupon', { code, percent });
          if (couponFeedback) {
            couponFeedback.style.color = '#15803d';
            couponFeedback.textContent = lang === 'es' ? `✓ ¡Cupón ${code} aplicado! (${percent}% OFF)` : `✓ Coupon ${code} applied! (${percent}% OFF)`;
          }
          this.renderCartPage();
        } else if (!code) {
          if (this.storage) this.storage.remove('coupon');
          if (couponFeedback) couponFeedback.textContent = '';
          this.renderCartPage();
        } else {
          if (couponFeedback) {
            couponFeedback.style.color = '#b91c1c';
            couponFeedback.textContent = lang === 'es' ? 'Código no válido. Prueba GOLDEN10, BOTANICAL15, COFFEE20, HONEY25 o GOLDENDUO.' : 'Invalid coupon code. Try GOLDEN10, BOTANICAL15, COFFEE20, HONEY25 or GOLDENDUO.';
          }
        }
      });
    }
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5C542" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartManager = new CartManager();

  document.querySelectorAll('[data-add-cart]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = button.getAttribute('data-add-cart');
      const qtyInput = document.querySelector(`[data-qty-for="${productId}"]`);
      const quantity = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      window.cartManager.addItem(productId, quantity);
    });
  });
});
