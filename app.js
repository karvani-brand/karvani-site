// ============================================================
// CONFIG — launch-day placeholders live here. Edit and redeploy.
// ============================================================
const CONFIG = {
  WHATSAPP_NUMBER: '+91-9396857360',
  PROMO_CODE: 'AMMA20',
  UPI_ID: '[UPI_ID]',
  PAYEE_NAME: "Amma's Ayurvedic Soaps",
  FEEDBACK_FORM_URL: '[FEEDBACK_FORM_URL]',
  GOOGLE_FORM_URL: '[GOOGLE_FORM_URL]'
};
// ============================================================

const UNIT_PRICE = 149;
const BUNDLE_PRICE = 399; // any 3 bars

// Every 3 bars = one ₹399 bundle, remainder at ₹149 each.
function orderTotal(bars) {
  const bundles = Math.floor(bars / 3);
  return bundles * BUNDLE_PRICE + (bars % 3) * UNIT_PRICE;
}

function buildWhatsAppLink(message) {
  const digits = CONFIG.WHATSAPP_NUMBER.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

// '[UPI_ID]'-style values are unfilled launch placeholders.
function isPlaceholder(value) {
  return value.startsWith('[');
}

if (typeof document !== 'undefined') {

  // ---- Wire CONFIG into the static sections ----
  const configText = {
    promoCode: CONFIG.PROMO_CODE,
    upiId: CONFIG.UPI_ID,
    payeeName: CONFIG.PAYEE_NAME,
    whatsappDisplay: CONFIG.WHATSAPP_NUMBER
  };
  document.querySelectorAll('[data-config]').forEach((el) => {
    el.textContent = configText[el.dataset.config];
  });

  document.getElementById('general-wa-link').href = buildWhatsAppLink(
    `Hi! I'd like to place an order with ${CONFIG.PAYEE_NAME} (code ${CONFIG.PROMO_CODE}).`
  );
  // Form links stay '#' until their CONFIG URLs are filled in.
  if (!isPlaceholder(CONFIG.FEEDBACK_FORM_URL)) {
    document.getElementById('feedback-link').href = CONFIG.FEEDBACK_FORM_URL;
  }
  if (!isPlaceholder(CONFIG.GOOGLE_FORM_URL)) {
    document.getElementById('order-form-link').href = CONFIG.GOOGLE_FORM_URL;
  }

  const qty = {}; // product name -> bar count

  // Inject a qty stepper into each card (hidden until qty > 0).
  document.querySelectorAll('.product-card').forEach((card) => {
    card.querySelector('.btn-add').insertAdjacentHTML('afterend',
      `<div class="qty-stepper" hidden>
        <button class="qty-btn qty-dec" type="button" data-action="dec" aria-label="Remove one">&minus;</button>
        <span class="qty-label">0 in order</span>
        <button class="qty-btn qty-inc" type="button" data-action="inc" aria-label="Add one">+</button>
      </div>`);
  });

  function render() {
    let totalBars = 0;
    const lines = [];
    document.querySelectorAll('.product-card').forEach((card) => {
      const name = card.dataset.name;
      const n = qty[name] || 0;
      totalBars += n;
      if (n > 0) lines.push(`${n}× ${name}`);
      card.querySelector('.btn-add').hidden = n > 0;
      const stepper = card.querySelector('.qty-stepper');
      stepper.hidden = n === 0;
      stepper.querySelector('.qty-label').textContent = `${n} in order`;
    });

    const bar = document.getElementById('order-bar');
    const spacer = document.getElementById('order-bar-spacer');
    bar.hidden = totalBars === 0;
    spacer.hidden = totalBars === 0;
    if (totalBars === 0) return;

    const total = orderTotal(totalBars);
    document.getElementById('cart-count').textContent = totalBars === 1 ? '1 bar' : `${totalBars} bars`;
    document.getElementById('cart-total').textContent = total;
    document.getElementById('bundle-note').hidden = totalBars < 3;
    const msg = `Hi! I'd like to order:\n${lines.join('\n')}\n\nTotal: ₹${total}\nCode: ${CONFIG.PROMO_CODE}`;
    document.getElementById('send-order-link').href = buildWhatsAppLink(msg);
  }

  document.getElementById('product-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const name = btn.closest('.product-card').dataset.name;
    const delta = btn.dataset.action === 'dec' ? -1 : 1; // add & inc both +1
    qty[name] = Math.max(0, (qty[name] || 0) + delta);
    if (qty[name] === 0) delete qty[name];
    render();
  });

}

// Node-only export so pricing logic is unit-checkable: `node test/pricing.test.js`
if (typeof module !== 'undefined') {
  module.exports = { orderTotal, buildWhatsAppLink, CONFIG, UNIT_PRICE, BUNDLE_PRICE };
}
