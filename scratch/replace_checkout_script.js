const fs = require('fs');
const path = 'checkout.html';
let content = fs.readFileSync(path, 'utf8');

const newScript = `  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const user = goldenStorage.getUser();
      if (!user) {
        if (window.cartManager) {
          window.cartManager.openAuthGateModal('checkout.html');
        } else {
          window.location.href = 'cuenta.html';
        }
        const mainCol = document.querySelector('.checkout-main-col');
        if (mainCol) {
          const lang = window.i18n ? window.i18n.currentLang : 'es';
          mainCol.innerHTML = \`
            <div class="checkout-form-card" style="text-align: center; padding: 4rem 2rem;">
              <div class="auth-gate-icon-badge" style="margin: 0 auto 1.5rem; width: 68px; height: 68px; border-radius: 50%; background: rgba(197, 147, 35, 0.15); color: var(--gold-dark); display: flex; align-items: center; justify-content: center;">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--coffee-deep); margin-bottom: 0.75rem;">
                \${lang === 'es' ? 'Cuenta Requerida para Finalizar Compra' : 'Account Required for Checkout'}
              </h3>
              <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; max-width: 440px; margin: 0 auto 2rem;">
                \${lang === 'es' ? 'Para registrar tu orden y coordinar la entrega en Comayagua, debes iniciar sesión o registrar tu cuenta primero.' : 'To register your order and coordinate campus delivery in Comayagua, please sign in or create an account first.'}
              </p>
              <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="cuenta.html" class="btn btn-primary">\${lang === 'es' ? 'Iniciar Sesión / Registrarse' : 'Sign In / Register'}</a>
                <a href="tienda.html" class="btn btn-outline">\${lang === 'es' ? 'Volver a la Tienda' : 'Back to Shop'}</a>
              </div>
            </div>
          \`;
        }
        return;
      }

      // Pre-fill user profile info
      if (user) {
        if (document.getElementById('custName')) document.getElementById('custName').value = user.name || '';
        if (document.getElementById('custEmail')) document.getElementById('custEmail').value = user.email || '';
        if (document.getElementById('custPhone') && user.phone) document.getElementById('custPhone').value = user.phone;
        if (document.getElementById('cardNameInput')) document.getElementById('cardNameInput').value = (user.name || '').toUpperCase();
        if (document.getElementById('cardDisplayName')) document.getElementById('cardDisplayName').innerText = (user.name || 'TU NOMBRE').toUpperCase();
      }

      // Address type pills
      const addrPills = document.querySelectorAll('.address-type-pill');
      addrPills.forEach(pill => {
        pill.addEventListener('click', () => {
          addrPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        });
      });

      // Payment Tabs (Card, Bank Transfer, Cash/POS)
      const payTabs = document.querySelectorAll('.payment-tab-btn');
      const paneCard = document.getElementById('paneCard');
      const paneTransfer = document.getElementById('paneTransfer');
      const paneCash = document.getElementById('paneCash');
      const selectedPayMethod = document.getElementById('selectedPayMethod');

      payTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          payTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const method = tab.getAttribute('data-pay-tab');
          if (selectedPayMethod) selectedPayMethod.value = method;

          if (paneCard) paneCard.style.display = method === 'card' ? 'block' : 'none';
          if (paneTransfer) paneTransfer.style.display = method === 'transfer' ? 'block' : 'none';
          if (paneCash) paneCash.style.display = method === 'cash' ? 'block' : 'none';

          const btnText = document.getElementById('btnPayText');
          if (btnText) {
            if (method === 'card') btnText.innerText = 'Pagar con Tarjeta (POS)';
            else if (method === 'transfer') btnText.innerText = 'Confirmar Pedido & Transferir';
            else btnText.innerText = 'Confirmar Pedido Contra Entrega';
          }
        });
      });

      // Virtual Card Live Preview
      const cardNumInput = document.getElementById('cardNumInput');
      const cardNameInput = document.getElementById('cardNameInput');
      const cardExpInput = document.getElementById('cardExpInput');
      const cardCvvInput = document.getElementById('cardCvvInput');
      const virtualCard = document.getElementById('virtualCard');
      const cardDisplayNum = document.getElementById('cardDisplayNum');
      const cardDisplayName = document.getElementById('cardDisplayName');
      const cardDisplayExp = document.getElementById('cardDisplayExp');
      const cardDisplayCvv = document.getElementById('cardDisplayCvv');
      const cardBrandLogo = document.getElementById('cardBrandLogo');

      if (cardNumInput) {
        cardNumInput.addEventListener('input', (e) => {
          let val = e.target.value.replace(/\\D/g, '');
          if (val.length > 16) val = val.substring(0, 16);
          const parts = [];
          for (let i = 0; i < val.length; i += 4) {
            parts.push(val.substring(i, i + 4));
          }
          const formatted = parts.join(' ');
          e.target.value = formatted;

          if (cardDisplayNum) {
            cardDisplayNum.innerText = formatted.padEnd(19, '•');
          }

          // Card Brand Detection
          if (cardBrandLogo) {
            if (val.startsWith('4')) {
              cardBrandLogo.innerText = 'VISA';
              cardBrandLogo.style.color = '#FFF';
            } else if (val.startsWith('5')) {
              cardBrandLogo.innerText = 'Mastercard';
              cardBrandLogo.style.color = '#FF5F00';
            } else if (val.startsWith('3')) {
              cardBrandLogo.innerText = 'AMEX';
              cardBrandLogo.style.color = '#006FCF';
            } else {
              cardBrandLogo.innerText = 'VISA';
              cardBrandLogo.style.color = '#FFF';
            }
          }
        });
      }

      if (cardNameInput) {
        cardNameInput.addEventListener('input', (e) => {
          const val = e.target.value.toUpperCase();
          if (cardDisplayName) cardDisplayName.innerText = val || 'TU NOMBRE';
        });
      }

      if (cardExpInput) {
        cardExpInput.addEventListener('input', (e) => {
          let val = e.target.value.replace(/\\D/g, '');
          if (val.length > 4) val = val.substring(0, 4);
          if (val.length > 2) {
            val = val.substring(0, 2) + '/' + val.substring(2);
          }
          e.target.value = val;
          if (cardDisplayExp) cardDisplayExp.innerText = val || 'MM/AA';
        });
      }

      if (cardCvvInput) {
        cardCvvInput.addEventListener('focus', () => {
          if (virtualCard) virtualCard.classList.add('flipped');
        });
        cardCvvInput.addEventListener('blur', () => {
          if (virtualCard) virtualCard.classList.remove('flipped');
        });
        cardCvvInput.addEventListener('input', (e) => {
          const val = e.target.value.replace(/\\D/g, '');
          e.target.value = val;
          if (cardDisplayCvv) cardDisplayCvv.innerText = val ? '•'.repeat(val.length) : '•••';
        });
      }

      // Copy Bank Account Buttons
      document.querySelectorAll('.btn-copy-account').forEach(btn => {
        btn.addEventListener('click', () => {
          const acc = btn.getAttribute('data-copy');
          navigator.clipboard.writeText(acc).then(() => {
            const orig = btn.innerText;
            btn.innerText = '¡Copiado! ✓';
            btn.style.background = '#10B981';
            btn.style.color = '#FFF';
            setTimeout(() => {
              btn.innerText = orig;
              btn.style.background = '';
              btn.style.color = '';
            }, 2000);
          });
        });
      });

      // Coupon System (e.g. GOLDEN10)
      const btnCoupon = document.getElementById('btnApplyCouponCode');
      const couponInput = document.getElementById('couponCodeInput');
      const couponFeedback = document.getElementById('couponFeedbackMsg');

      if (btnCoupon && couponInput) {
        btnCoupon.addEventListener('click', () => {
          const code = (couponInput.value || '').trim().toUpperCase();
          if (code === 'GOLDEN10') {
            goldenStorage.set('coupon', 'GOLDEN10');
            if (couponFeedback) {
              couponFeedback.style.display = 'block';
              couponFeedback.style.color = '#0E9F6E';
              couponFeedback.innerText = '✓ ¡Cupón GOLDEN10 aplicado! 10% de descuento concedido.';
            }
          } else if (code === '') {
            goldenStorage.remove('coupon');
            if (couponFeedback) couponFeedback.style.display = 'none';
          } else {
            if (couponFeedback) {
              couponFeedback.style.display = 'block';
              couponFeedback.style.color = '#E02424';
              couponFeedback.innerText = '✗ Código inválido. Usa GOLDEN10 para 10% de descuento.';
            }
          }
          renderCheckoutSummary();
        });
      }

      // Initial Cart Render
      renderCheckoutSummary();

      // Submit Amazon Order Handler
      const btnPay = document.getElementById('btnPlaceOrderAmazon');
      if (btnPay) {
        btnPay.addEventListener('click', handleAmazonCheckout);
      }
    });

    function renderCheckoutSummary() {
      const cart = goldenStorage.getCart();
      const miniListEl = document.getElementById('checkoutMiniList');
      if (!miniListEl) return;

      miniListEl.innerHTML = '';
      if (!cart || cart.length === 0) {
        miniListEl.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem; padding: 1.5rem 0; text-align: center;">Tu bolsa está vacía.<br><a href="tienda.html" class="btn btn-outline btn-sm" style="margin-top: 0.75rem;">Ver Catálogo</a></div>';
      } else {
        cart.forEach(item => {
          const row = document.createElement('div');
          row.className = 'checkout-mini-item';
          const lineTot = (Number(item.price) * Number(item.quantity)).toFixed(2);
          const lang = window.i18n ? window.i18n.currentLang : 'es';
          const title = lang === 'es' ? (item.name_es || item.name) : item.name;
          const imgPath = item.image || 'assets/img/producto-exfoliante.png';

          row.innerHTML = \`
            <img src="\${imgPath}" alt="\${title}" class="checkout-mini-thumb">
            <div class="checkout-mini-details">
              <div class="checkout-mini-title">\${title}</div>
              <div class="checkout-mini-qty">\${item.quantity} × L \${(Number(item.price)).toFixed(2)}</div>
            </div>
            <div class="checkout-mini-price">L \${lineTot}</div>
          \`;
          miniListEl.appendChild(row);
        });
      }

      const totals = goldenStorage.calculateTotals();
      if (document.getElementById('chkSubtotal')) document.getElementById('chkSubtotal').innerText = 'L ' + totals.subtotal.toFixed(2);
      if (document.getElementById('chkDelivery')) document.getElementById('chkDelivery').innerText = totals.delivery === 0 ? '¡GRATIS!' : 'L ' + totals.delivery.toFixed(2);
      if (document.getElementById('chkTotal')) document.getElementById('chkTotal').innerText = 'L ' + totals.total.toFixed(2);
      if (document.getElementById('chkTotalUsd')) document.getElementById('chkTotalUsd').innerText = '(aprox. $' + (totals.total / 24).toFixed(2) + ' USD)';

      const discRow = document.getElementById('chkDiscountRow');
      if (discRow) {
        if (totals.discount > 0) {
          discRow.style.display = 'flex';
          document.getElementById('chkDiscount').innerText = '-L ' + totals.discount.toFixed(2);
        } else {
          discRow.style.display = 'none';
        }
      }

      // Free shipping progress bar
      const fill = document.getElementById('freeShipFill');
      const statusText = document.getElementById('freeShipStatusText');
      if (fill && statusText) {
        const pct = Math.min(100, Math.round((totals.subtotal / 300) * 100));
        fill.style.width = pct + '%';
        if (totals.subtotal >= 300) {
          statusText.innerText = '🎉 ¡Felicidades! Tienes Envío Gratis en Comayagua';
          statusText.style.color = '#0E9F6E';
        } else {
          statusText.innerText = \`Agrega L \${(300 - totals.subtotal).toFixed(2)} más para Envío Gratis\`;
          statusText.style.color = 'var(--coffee-deep)';
        }
      }

      // Update button text with total
      const btnText = document.getElementById('btnPayText');
      const method = document.getElementById('selectedPayMethod') ? document.getElementById('selectedPayMethod').value : 'card';
      if (btnText) {
        if (method === 'card') btnText.innerText = \`Pagar con Tarjeta L \${totals.total.toFixed(2)}\`;
        else if (method === 'transfer') btnText.innerText = \`Confirmar Pedido L \${totals.total.toFixed(2)}\`;
        else btnText.innerText = \`Confirmar Pedido Contra Entrega L \${totals.total.toFixed(2)}\`;
      }
    }

    function handleAmazonCheckout() {
      const cart = goldenStorage.getCart();
      if (!cart || cart.length === 0) {
        alert('Tu bolsa de compras está vacía.');
        window.location.href = 'tienda.html';
        return;
      }

      const name = document.getElementById('custName') ? document.getElementById('custName').value.trim() : '';
      const phone = document.getElementById('custPhone') ? document.getElementById('custPhone').value.trim() : '';
      const email = document.getElementById('custEmail') ? document.getElementById('custEmail').value.trim() : '';
      const location = document.getElementById('custLocation') ? document.getElementById('custLocation').value : '';
      const address = document.getElementById('custAddress') ? document.getElementById('custAddress').value.trim() : '';
      const notes = document.getElementById('custNotes') ? document.getElementById('custNotes').value.trim() : '';
      const payMethod = document.getElementById('selectedPayMethod') ? document.getElementById('selectedPayMethod').value : 'card';

      if (!name || !phone || !email || !location || !address) {
        alert('Por favor completa todos los campos requeridos de la dirección de entrega.');
        if (!name && document.getElementById('custName')) document.getElementById('custName').focus();
        else if (!phone && document.getElementById('custPhone')) document.getElementById('custPhone').focus();
        else if (!address && document.getElementById('custAddress')) document.getElementById('custAddress').focus();
        return;
      }

      // If Card method, validate card input formats
      if (payMethod === 'card') {
        const cardNum = document.getElementById('cardNumInput') ? document.getElementById('cardNumInput').value.replace(/\\s/g, '') : '';
        const cardExp = document.getElementById('cardExpInput') ? document.getElementById('cardExpInput').value.trim() : '';
        const cardCvv = document.getElementById('cardCvvInput') ? document.getElementById('cardCvvInput').value.trim() : '';

        if (cardNum.length < 15 || !cardExp.includes('/') || cardCvv.length < 3) {
          alert('Por favor verifica los datos de tu tarjeta (Número, Fecha de Expiración MM/AA y CVV).');
          if (document.getElementById('cardNumInput')) document.getElementById('cardNumInput').focus();
          return;
        }
      }

      // Trigger Amazon POS processing animation
      const overlay = document.getElementById('posProcessingOverlay');
      const msg = document.getElementById('posProcessingMsg');
      const sub = document.getElementById('posProcessingSub');
      if (overlay) overlay.classList.add('active');

      const totals = goldenStorage.calculateTotals();
      const orderNum = 'GR-' + Math.floor(100000 + Math.random() * 900000);

      let methodLabel = 'Tarjeta de Crédito/Débito (POS)';
      if (payMethod === 'transfer') methodLabel = 'Transferencia Bancaria Local';
      if (payMethod === 'cash') methodLabel = 'Contra Entrega en Comayagua';

      const orderData = {
        orderNumber: orderNum,
        date: new Date().toISOString(),
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        deliveryLocation: location,
        address: address,
        notes: notes,
        paymentMethod: methodLabel,
        items: cart,
        subtotal: totals.subtotal,
        discount: totals.discount,
        delivery: totals.delivery,
        total: totals.total,
        status: 'Confirmado (En Preparación)'
      };

      // Sequential status sequence
      setTimeout(() => {
        if (sub) sub.innerText = 'Validando autorización bancaria y reservando lote botánico...';
      }, 700);

      setTimeout(() => {
        if (msg) msg.innerText = '¡Transacción Aprobada! ✓';
        if (sub) sub.innerText = 'Generando recibo digital e iniciando despacho...';
      }, 1400);

      setTimeout(() => {
        if (overlay) overlay.classList.remove('active');

        // Persist order in GoldenStorage
        goldenStorage.addOrder(orderData);
        goldenStorage.clearCart();

        // Update stepper to completed
        const step2 = document.getElementById('stepNode2');
        const step3 = document.getElementById('stepNode3');
        if (step2) { step2.classList.remove('active'); step2.classList.add('completed'); step2.querySelector('.step-circle').innerText = '✓'; }
        if (step3) { step3.classList.add('active'); }

        // Populate receipt modal
        document.getElementById('modalOrderNumber').innerText = '#' + orderData.orderNumber;
        document.getElementById('modalOrderCustomer').innerText = orderData.customerName;
        document.getElementById('modalOrderLocation').innerText = orderData.deliveryLocation + ' (' + orderData.address + ')';
        document.getElementById('modalOrderPayMethod').innerText = orderData.paymentMethod;
        document.getElementById('modalOrderTotal').innerText = 'L ' + orderData.total.toFixed(2);

        // WhatsApp direct link
        const waText = encodeURIComponent(\`Hola equipo Golden Roast, acabo de registrar el pedido #\${orderData.orderNumber} a nombre de \${orderData.customerName} por un total de L \${orderData.total.toFixed(2)}. Mi punto de entrega es: \${orderData.deliveryLocation}.\`);
        const waBtn = document.getElementById('btnModalWhatsapp');
        if (waBtn) waBtn.href = 'https://wa.me/50499999999?text=' + waText;

        document.getElementById('orderModal').style.display = 'flex';
      }, 2000);
    }
  </script>`;

const scriptStart = '  <script>\r\n    document.addEventListener(\'DOMContentLoaded\', () => {\r\n      const user = goldenStorage.getUser();';
const scriptStartAlt = '  <script>\n    document.addEventListener(\'DOMContentLoaded\', () => {\n      const user = goldenStorage.getUser();';

let idx = content.indexOf(scriptStart);
if (idx === -1) idx = content.indexOf(scriptStartAlt);

if (idx !== -1) {
  content = content.substring(0, idx) + newScript + '\n</body>\n</html>';
  fs.writeFileSync(path, content, 'utf8');
  console.log('SCRIPT REPLACED SUCCESSFULLY');
} else {
  console.log('SCRIPT START NOT FOUND');
}
