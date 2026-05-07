const test = require('node:test');
const assert = require('node:assert');

const checkCPU = require('../cpu');
const checkRAM = require('../ram');
const checkDisco = require('../disco');
const checkSO = require('../SO');

test('checkCPU devuelve un string descriptivo', () => {
  const s = checkCPU();
  assert.strictEqual(typeof s, 'string');
  assert.match(s, /CPU:/);
});

test('checkRAM devuelve un string con GB', () => {
  const s = checkRAM();
  assert.strictEqual(typeof s, 'string');
  assert.match(s, /RAM Total:/);
});

test('checkDisco devuelve un string (df en Linux CI)', () => {
  const s = checkDisco();
  assert.strictEqual(typeof s, 'string');
  assert.ok(s.length > 0);
});

test('checkSO devuelve un string con datos del sistema', () => {
  const s = checkSO();
  assert.strictEqual(typeof s, 'string');
  assert.match(s, /SO:/);
});
