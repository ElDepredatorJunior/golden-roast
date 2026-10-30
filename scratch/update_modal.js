const fs = require('fs');
const path = 'checkout.html';
let content = fs.readFileSync(path, 'utf8');

const modalHTML = `  <!-- Amazon Order Confirmed Receipt Modal -->
  <div class="modal-overlay" id="orderModal">
    <div class="modal-box">
      <!-- Animated Success Checkmark Badge -->
      <div class="success-check-badge">
        <div class="success-pulse-ring"></div>
        <div class="success-check-circle">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>

      <span class="badge badge-gold" style="font-size: 0.8rem; padding: 0.35rem 0.95rem; margin-bottom: 0.75rem; display: inline-block;">
        Transacción Bancaria Aprobada ✓
      </span>
      <h2 style="font-family: var(--font-heading); color: var(--coffee-deep); font-size: 1.85rem; margin-bottom: 0.35rem; line-height: 1.2;">
        ¡Gracias por tu Pedido!
      </h2>
      <p style="color: var(--text-muted); font-size: 0.925rem; line-height: 1.5; margin-bottom: 1.35rem; max-width: 440px; margin-left: auto; margin-right: auto;">
        Tu orden ha sido registrada exitosamente en la plataforma de <strong>Golden Roast</strong>.
      </p>

      <!-- Amazon Live Delivery Tracker -->
      <div class="amazon-package-tracker">
        <div class="tracker-step completed">
          <span class="tracker-dot">✓</span>
          <span class="tracker-text">Confirmado</span>
        </div>
        <div class="tracker-line active"></div>
        <div class="tracker-step active">
          <span class="tracker-dot">🌿</span>
          <span class="tracker-text">En Preparación</span>
        </div>
        <div class="tracker-line"></div>
        <div class="tracker-step">
          <span class="tracker-dot">🚚</span>
          <span class="tracker-text">Por Entregar</span>
        </div>
      </div>

      <!-- Itemized Receipt Box -->
      <div class="receipt-card-box">
        <div class="receipt-row" style="border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
          <span class="receipt-label">Número de Pedido:</span>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <strong id="modalOrderNumber" style="color: var(--gold-dark); font-family: monospace; font-size: 1.05rem;">#GR-000000</strong>
            <button type="button" id="btnCopyModalOrder" class="btn-copy-account" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">Copiar</button>
          </div>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Destinatario:</span>
          <span class="receipt-val" id="modalOrderCustomer"></span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Punto de Entrega:</span>
          <span class="receipt-val" id="modalOrderLocation" style="max-width: 270px;"></span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Método de Pago:</span>
          <span class="receipt-val" id="modalOrderPayMethod"></span>
        </div>
        <div class="receipt-row">
          <span class="receipt-label">Entrega Estimada:</span>
          <span class="receipt-val" style="color: #0E9F6E; font-weight: 700;">Mañana, entre 10:00 AM y 4:00 PM</span>
        </div>

        <!-- Purchased Items Summary Inside Receipt -->
        <div class="receipt-items-container" id="modalOrderItems"></div>

        <div class="receipt-total-row">
          <span>Total Pagado:</span>
          <span id="modalOrderTotal" style="color: var(--coffee-deep); font-weight: 800;">L 0.00</span>
        </div>
      </div>

      <!-- Action Button Stack (Clear, Elegant, No Overflow) -->
      <div class="modal-actions-stack">
        <a id="btnModalWhatsapp" href="#" target="_blank" class="btn-modal-primary-wa">
          <span>📲 Coordinar Entrega por WhatsApp</span>
        </a>
        <div class="modal-secondary-grid">
          <button type="button" class="btn-modal-secondary" onclick="window.print()">
            <span>🖨️ Imprimir Recibo</span>
          </button>
          <a href="cuenta.html" class="btn-modal-secondary">
            <span>👤 Ver en Mi Cuenta</span>
          </a>
        </div>
        <div>
          <a href="tienda.html" class="modal-link-back">
            <span>← Seguir Comprando en la Tienda</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;

const startTag = '<!-- Amazon Order Confirmed Receipt Modal -->';
const endTag = '<!-- Footer (Enterprise Luxury Dark Acrylic & Social Hub) -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + modalHTML + '\n\n    ' + content.substring(endIndex);
  
  // Also update the JS that opens the modal
  const oldShow = "document.getElementById('orderModal').style.display = 'flex';";
  const newShow = `// Populate items in modal
        const modalItems = document.getElementById('modalOrderItems');
        if (modalItems) {
          modalItems.innerHTML = '';
          cart.forEach(it => {
            const row = document.createElement('div');
            row.className = 'receipt-item-line';
            const lang = window.i18n ? window.i18n.currentLang : 'es';
            const title = lang === 'es' ? (it.name_es || it.name) : it.name;
            const lineTot = (Number(it.price) * Number(it.quantity)).toFixed(2);
            row.innerHTML = '<span>' + it.quantity + ' × ' + title + '</span><strong>L ' + lineTot + '</strong>';
            modalItems.appendChild(row);
          });
        }

        // Copy order number button
        const btnCopyOrder = document.getElementById('btnCopyModalOrder');
        if (btnCopyOrder) {
          btnCopyOrder.onclick = () => {
            navigator.clipboard.writeText(orderData.orderNumber);
            btnCopyOrder.innerText = '✓';
            setTimeout(() => { btnCopyOrder.innerText = 'Copiar'; }, 2000);
          };
        }

        const modalEl = document.getElementById('orderModal');
        if (modalEl) modalEl.classList.add('active');`;

  if (content.includes(oldShow)) {
    content = content.replace(oldShow, newShow);
  }

  fs.writeFileSync(path, content, 'utf8');
  console.log('MODAL AND JS UPDATED SUCCESSFULLY');
} else {
  console.log('INDICES NOT FOUND', startIndex, endIndex);
}
