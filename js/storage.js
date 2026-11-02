/**
 * Golden Roast - Centralized Persistence & Local Storage Architecture
 * Version: 2.1.0 (Fluent & Apple Design Edition)
 * Defaults to Spanish ('es'), handles cart, user, orders, favorites, and cross-tab sync.
 */

const STORAGE_PREFIX = 'golden_roast_v2_';

class GoldenStorage {
  constructor() {
    this.prefix = STORAGE_PREFIX;
    this.memoryFallback = new Map();
    this.isLocalStorageAvailable = this.checkAvailability();
    this.initSync();
  }

  checkAvailability() {
    try {
      const testKey = '__gr_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('LocalStorage not available, falling back to in-memory store:', e);
      return false;
    }
  }

  initSync() {
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith(this.prefix)) {
        const cleanKey = e.key.replace(this.prefix, '');
        window.dispatchEvent(new CustomEvent('golden_storage_sync', {
          detail: { key: cleanKey, newValue: e.newValue }
        }));
      }
    });
  }

  get(key, defaultValue = null) {
    const fullKey = this.prefix + key;
    if (!this.isLocalStorageAvailable) {
      return this.memoryFallback.has(fullKey) ? this.memoryFallback.get(fullKey) : defaultValue;
    }
    try {
      const raw = window.localStorage.getItem(fullKey);
      if (raw === null || raw === undefined) return defaultValue;
      return JSON.parse(raw);
    } catch (e) {
      console.error(`Error reading ${fullKey} from storage:`, e);
      return defaultValue;
    }
  }

  set(key, value) {
    const fullKey = this.prefix + key;
    if (!this.isLocalStorageAvailable) {
      this.memoryFallback.set(fullKey, value);
      return true;
    }
    try {
      window.localStorage.setItem(fullKey, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Error writing ${fullKey} to storage:`, e);
      return false;
    }
  }

  remove(key) {
    const fullKey = this.prefix + key;
    if (!this.isLocalStorageAvailable) {
      this.memoryFallback.delete(fullKey);
      return;
    }
    try {
      window.localStorage.removeItem(fullKey);
    } catch (e) {
      console.error(`Error removing ${fullKey} from storage:`, e);
    }
  }

  clearAll() {
    if (!this.isLocalStorageAvailable) {
      this.memoryFallback.clear();
      return;
    }
    try {
      const keysToRemove = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(this.prefix)) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(k => window.localStorage.removeItem(k));
    } catch (e) {
      console.error('Error clearing Golden Roast storage:', e);
    }
  }

  // Language: Default is English ('en') as required
  getLanguage() {
    return this.get('lang', 'en');
  }

  setLanguage(lang) {
    this.set('lang', lang === 'en' ? 'en' : 'es');
  }

  // Cart
  getCart() {
    const raw = this.get('cart', []);
    if (!Array.isArray(raw)) return [];
    return raw.filter(item => item && typeof item === 'object' && item.id);
  }

  setCart(cartItems) {
    return this.set('cart', Array.isArray(cartItems) ? cartItems : []);
  }

  // User Authentication & Session
  getUser() {
    return this.get('session_user', null);
  }

  setUser(userData) {
    return this.set('session_user', userData);
  }

  logout() {
    this.remove('session_user');
  }

  // Orders History
  getOrders() {
    return this.get('orders', []);
  }

  addOrder(order) {
    const orders = this.getOrders();
    orders.unshift(order);
    this.set('orders', orders);
    return order;
  }

  saveOrder(order) {
    return this.addOrder(order);
  }

  clearCart() {
    this.setCart([]);
    window.dispatchEvent(new CustomEvent('golden_cart_updated', { detail: { cart: [] } }));
  }

  calculateTotals() {
    const cart = this.getCart();
    const subtotal = cart.reduce((sum, item) => {
      const q = Math.max(1, Math.min(99, Math.floor(Number(item.quantity)) || 1));
      const p = Math.max(0, Number(item.price) || 0);
      return sum + (p * q);
    }, 0);
    const coupon = this.get('coupon', null);
    let discount = 0;
    if (coupon && (coupon.code === 'GOLDEN10' || coupon === 'GOLDEN10')) {
      discount = Math.round(subtotal * 0.10 * 100) / 100;
    }
    const cleanSubtotal = Math.round(subtotal * 100) / 100;
    const delivery = cleanSubtotal >= 300 || cleanSubtotal === 0 ? 0 : 40.00;
    const total = Math.round(Math.max(0, cleanSubtotal - discount + delivery) * 100) / 100;
    return {
      subtotal: cleanSubtotal,
      discount,
      delivery,
      total,
      hasFreeDelivery: cleanSubtotal >= 300,
      freeDeliveryGap: Math.round(Math.max(0, 300 - cleanSubtotal) * 100) / 100
    };
  }

  // Favorites / Wishlist
  getFavorites() {
    return this.get('favorites', []);
  }

  toggleFavorite(productId) {
    let favs = this.getFavorites();
    if (favs.includes(productId)) {
      favs = favs.filter(id => id !== productId);
    } else {
      favs.push(productId);
    }
    this.set('favorites', favs);
    return favs;
  }

  isFavorite(productId) {
    return this.getFavorites().includes(productId);
  }
}

// Global instance
window.goldenStorage = new GoldenStorage();
