// Run: node test/pricing.test.js
const assert = require('assert');
const { orderTotal, buildWhatsAppLink } = require('../app.js');

const cases = [[0, 0], [1, 149], [2, 298], [3, 399], [4, 548], [5, 697], [6, 798], [7, 947]];
for (const [bars, want] of cases) {
  const got = orderTotal(bars);
  assert.strictEqual(got, want, `${bars} bars: got ${got}, want ${want}`);
  console.log(`${bars} bars -> ₹${got} (expected ₹${want}) OK`);
}

const link = buildWhatsAppLink('Hi! 2× Neem');
assert.ok(link.startsWith('https://wa.me/919396857360?text='), `bad wa.me link: ${link}`);
assert.ok(link.includes(encodeURIComponent('2× Neem')), 'message not URL-encoded into link');
console.log('wa.me link OK:', link);

console.log('All pricing checks passed.');
