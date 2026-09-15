// Run: node test/pricing.test.js
const assert = require('assert');
const { orderTotal, buildWhatsAppLink, UNIT_PRICE } = require('../app.js');

const S = UNIT_PRICE; // 149, bundle-eligible
const P = 199;        // Sandalwood / Saffron, never bundled

const cases = [
  [[], 0, 'empty order'],
  [[S], 149, 'one standard bar'],
  [[S, S], 298, 'two standard bars'],
  [[S, S, S], 399, 'three standard bars make a bundle'],
  [[S, S, S, S], 548, 'bundle plus one'],
  [[S, S, S, S, S, S], 798, 'two bundles'],
  [[S, S, S, S, S, S, S], 947, 'two bundles plus one'],
  [[P], 199, 'one premium bar'],
  [[P, P], 398, 'two premium bars'],
  // The rule that protects margin: premium bars never reach the bundle rate.
  [[P, P, P], 597, 'three premium bars are NOT 399'],
  [[S, S, P], 497, 'two standard + one premium: no bundle, premium at cost'],
  [[S, S, S, P], 598, 'bundle of three standard, premium on top'],
  [[S, S, S, P, P], 797, 'bundle plus two premium'],
  [[S, S, S, S, S, S, P], 997, 'two bundles plus one premium'],
];

for (const [prices, want, label] of cases) {
  const got = orderTotal(prices);
  assert.strictEqual(got, want, `${label}: got ₹${got}, want ₹${want}`);
  console.log(`₹${String(got).padStart(4)}  ${label}`);
}

// Order of bars must not change the total.
assert.strictEqual(orderTotal([P, S, S, S]), orderTotal([S, S, S, P]), 'total depends on bar order');
console.log('order-independent OK');

const link = buildWhatsAppLink('Hi! 2× Neem');
assert.ok(link.startsWith('https://wa.me/919396857360?text='), `bad wa.me link: ${link}`);
assert.ok(link.includes(encodeURIComponent('2× Neem')), 'message not URL-encoded into link');
console.log('wa.me link OK:', link);

console.log('All pricing checks passed.');
