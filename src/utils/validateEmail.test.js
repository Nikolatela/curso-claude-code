const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail } = require('./validateEmail');

test('rejects domain with empty label (usuario@.com)', () => {
  assert.equal(isValidEmail('usuario@.com'), false);
});

test('rejects domain with double dot', () => {
  assert.equal(isValidEmail('usuario@dominio..com'), false);
});

test('rejects domain starting with a hyphen', () => {
  assert.equal(isValidEmail('usuario@-dominio.com'), false);
});

test('rejects single-character TLD', () => {
  assert.equal(isValidEmail('usuario@dominio.c'), false);
});

test('accepts a standard valid email', () => {
  assert.equal(isValidEmail('usuario@dominio.com'), true);
});

test('accepts email with plus tag and short TLD', () => {
  assert.equal(isValidEmail('usuario+tag@dominio.co'), true);
});
