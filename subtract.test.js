const { expect } = require('@jest/globals');
const subtract = require('./subract');

test('properly adds two numbers', () => {
  expect(
    subtract(1,4)
  ).toBe(-3)
})