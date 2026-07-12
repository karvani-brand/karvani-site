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

function buildWhatsAppLink(message) {
  const digits = CONFIG.WHATSAPP_NUMBER.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

document.getElementById('product-grid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="add"]');
  if (!btn) return;
  const card = btn.closest('.product-card');
  const name = card.dataset.name;
  const price = card.dataset.price;
  const message = `Hi! I'd like to order:\n1× ${name}\n\nTotal: ₹${price}\nCode: ${CONFIG.PROMO_CODE}`;
  window.open(buildWhatsAppLink(message), '_blank', 'noopener');
});
